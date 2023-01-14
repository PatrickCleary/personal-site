
export const Footer = () => {
  return (
    <div style={{ position:'absolute', bottom:'0px', padding:'.5rem', display:'flex', justifyContent:'center'}}>
      <p style={{fontSize:'.8rem', paddingLeft:".5rem"}}>{`© Patrick Cleary ${new Date().getFullYear()}`}</p>
    </div>
  );
};
