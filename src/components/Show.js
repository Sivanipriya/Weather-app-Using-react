import Apple from './Class';
function Show()
{
  const dclass={keys:"sivani",value:"ceg"};
  const appInfo={type:"fuki",val:"apple"};
  return(
    <>
    {
  appInfo.type!=undefined && appInfo.val!=undefined? <Apple appInfo={appInfo} />:null
    }
  </>
  );
}

export default Show;