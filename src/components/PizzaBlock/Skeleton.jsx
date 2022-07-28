import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="1" y="277" rx="10" ry="10" width="260" height="27" /> 
    <rect x="0" y="320" rx="0" ry="0" width="260" height="88" /> 
    <rect x="0" y="427" rx="10" ry="10" width="95" height="30" /> 
    <rect x="106" y="423" rx="25" ry="25" width="152" height="35" />
  </ContentLoader>
)

export default Skeleton

