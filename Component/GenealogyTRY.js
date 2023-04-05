import React, { useEffect, useState } from "react";
import FirstBar from "./FirstBar";
import LeftLeg from "./LeftLeg";
import RightLeg from "./RightLeg";
import axios from "axios";

function App() {
  const [treeView, setTreeView] = useState([]);
  const [childTreeView, setChildTreeView] = useState([]);
  async function getTreeStatus() {
    const token = localStorage.getItem("token");
    console.log(token, "to get the token from local storage to get tree view");
    try {
      let res = await axios.post("/api/tree", { token: token });
      const response = res.data;
      console.log(response, "response");
      console.log(response.data.data, "to get response from api");
      setTreeView(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTreeStatus();
    console.log("first");
  }, []);

  function TreeNode({ node }) {
    console.log("node", node);
    const [isOpen, setIsOpen] = useState(false);

    function handleNodeClick() {
      setIsOpen(!isOpen);
    }

    return (
      <div>
        <div onClick={handleNodeClick}></div>
        {isOpen &&
          node?.map((childNode) => (
            <TreeNode key={childNode.node} node={treeView} />
          ))}
      </div>
    );
  }

  function Tree({ nodes }) {
    console.log("nodes", nodes);
    const [activeNode, setActiveNode] = useState(null);

    async function handleNodeClick({ node }) {
      console.log(node, "to get value targettted");
      setActiveNode(node);
      try {
        const token = localStorage.getItem("token");
        let res = await axios.post("/api/children", {
          token: token,
          userId: node,
        });
        const response = res.data;
        console.log(
          response.data.data.children,
          "to get response from api to get children"
        );

        setChildTreeView(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    return (
      <div className="LegsHead">
        {nodes?.map((node) => (
          <div>
            <div onClick={(e) => handleNodeClick({ node: node })}>
              <FirstBar text={node} />
            </div>
            {activeNode && activeNode.id === node && <TreeNode node={node} />}
          </div>
        ))}
        <div>
          {childTreeView
            ? childTreeView?.map((item) => {
                return (
                  <div className="mainDiv">
                    <div
                      value={item?.left}
                      onClick={(e) => handleNodeClick({ node: item?.left })}
                    >
                      <LeftLeg text={item.name} />
                    </div>
                    <div
                      value={item?.right}
                      onClick={(e) => handleNodeClick({ node: item?.right })}
                    >
                      <RightLeg text={item.name} />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tree nodes={treeView} />
    </div>
  );
}

export default App;
