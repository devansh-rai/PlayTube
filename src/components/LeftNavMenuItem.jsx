/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const LeftNavMenuItem = ({text,icon,classn,action}) => 
{
  return (
    <div className= {"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + classn} onClick={action}>
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem