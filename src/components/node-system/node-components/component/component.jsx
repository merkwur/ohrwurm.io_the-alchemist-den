import React from 'react'
import "./component.scss"
import Input from '../component-helpers/input/input'
import Output from '../component-helpers/output/output'

const Component = ({node}) => {
  const inputs = node.input ? Object.keys(node.input) : null 



  return (
    <div 
      className='source-container'
      id={node.id}
      style={{
        height: `${node.size.y}px`,
        width :`${node.size.x}px`,
      }}
    >
      <>
        {inputs ? (
          <>
            {inputs.map((input, index) => (
              <React.Fragment key={node.id + index}>
                <Input 
                  id={node.id}
                  inputType={input} 
                  whichParent={input === "node" || input === "trigger" ? node.type : "natural"}
                  yPosition={node.size.y / (inputs.length + 1)  * (index + 1) - 6}
                />
              </React.Fragment>
            ))}
         </>
        ) : null }
      </>
        {node.name !== "Analyzer" ? (
          <Output 
            id={node.id}
            outputType={"node"} 
            whichParent={node.type}
            yPosition={node.size.y / 2 - 6}
          />
        ) : null}
    </div>
  )
}

export default Component
