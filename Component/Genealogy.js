import React, { useEffect, useState } from "react";
import axios from "axios";
import FirstBar from "./FirstBar";

const Node = ({ node, onClick }) => {
  console.log(node, "to get the value of node");
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(node);

  async function getChildren() {
    try {
      const token = localStorage.getItem("token");
      let res = await axios.post("/api/children", {
        token: token,
        userId: node.id,
      });
      const response = res.data;
      console.log(response.data.data, "to get the value of children");
      setView(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = () => {
    getChildren();
    setIsOpen(!isOpen);
    onClick(view);
  };

  return (
    <div className="topHead">
      <div className="HeaderCircleSection">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={handleClick}>
            <FirstBar text={node} />
          </div>
          {isOpen && view?.children && view?.children?.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                color: "black",
              }}
            >
              {view?.children?.map((childNode) => (
                <Node key={childNode} node={childNode} onClick={onClick} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Tree = ({ data, onClick }) => {
  console.log(data, "on Tree");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {data.map((node) => (
        <Node key={node.id} node={node} onClick={onClick} />
      ))}
    </div>
  );
};

const App = () => {
  const [treeData, setTreeData] = useState([]);

  const getTreeStatus = async () => {
    const token = localStorage.getItem("token");
    console.log(token, "to get the token from local storage to get tree view");
    try {
      let res = await axios.post("/api/tree", { token: token });
      const response = res.data;
      console.log(response, "response");
      console.log(response.data.data, "to get response from api");
      setTreeData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTreeStatus();
    console.log("first");
  }, []);

  const handleNodeClick = (node) => {
    console.log(`Node ${node.id} clicked`);
  };

  return (
    <div>
      <Tree data={treeData} onClick={handleNodeClick} />
    </div>
  );
};

export default App;
