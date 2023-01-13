
export const Footer = () => {
  return (
    <div style={{ position:'absolute', bottom:'0px', padding:'.25rem', display:'flex', justifyContent:'flex-start', width:'100%'}}>
      <p style={{fontSize:'.8rem', paddingLeft:".5rem"}}>{`© Patrick Cleary ${new Date().getFullYear()}`}</p>
    </div>
  );
};
