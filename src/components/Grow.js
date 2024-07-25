function Grow(props)
{
//   //  const {key,value} =props;
//     return (<>
//     <p>Hi</p>
//     <p>`${key}`{value}</p>
//     </>);
const {dclass} =props;
const {keys,value}=dclass;
return (<>
<p>Hi</p>
<p>{keys}</p>
<p>{value}</p></>);
}

export default Grow;