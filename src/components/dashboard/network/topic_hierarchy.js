import React, { useRef, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import data from "../../../../public/data/topic_hierarchy_data";
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const svgSquare = {
    shape: "node",
    background: "#2196f3",
    shapeProps: {
      x: -10,
      y: -10,
      height: 30,
      width: 50
    }
  };
 
  
  const innerHeight = 800;
  const innerWidth = 1024;

  function NodeLabel(node) {
    const { nodeData } = node;
    const hasChildren = nodeData.children;
    const btnStyle = {
      background: hasChildren ? "#03A9F4" : "",
      cursor: hasChildren ? "pointer" : "default"
    };
    return (
      <button className="btn" style={btnStyle}>
      {nodeData.name}
    </button>
    );
  }
  export const TopicHierarchyScores = () => {
    const theme = useTheme();
  
    // const treeContainer = useRef();
  const tree = useRef();
    const [dimensions, setDimensions] = useState({
      height:innerHeight,
      width:innerWidth

    });
    // const [translate, setTranslate] = useState({ x: 25, y: 100  });
    // useEffect(() => {
    //   if (treeContainer.current) {
    //     setDimensions(treeContainer.current.getBoundingClientRect());
    //   }
    // }, [treeContainer]);
    // useEffect(() => {
    //   console.log(dimensions);
    //   setTranslate({
    //     x: dimensions.width / 2,
    //     y: dimensions.height / 2 / 2
    //   });
    // }, [dimensions]);
  
    // console.log("tree", tree);
    // console.log("tree", tree);

    return (
      <div className="TopicHierarchyScores">
       

        <div
          id="treeWrapper"
          // ref={treeContainer}
          style={{ width: innerWidth, height: innerHeight}}
        >
          <Tree
            data={data}
            ref={tree}
            // translate={translate}
            // zoom={0.5}
            nodeSvgShape={svgSquare}
            style={{height: "50%", width: "50%"}}
            orientation="horizontal"
            // allowForeignObjects
            nodeLabelComponent={{
              render: <NodeLabel />,
              // foreignObjectWrapper: {
              //   y: -10,
              //   x: -50
              // }
            }}
          />
        </div>
      </div>
    );
  }