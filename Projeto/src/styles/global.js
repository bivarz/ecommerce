import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

body {
  background:#f9f9f9;
  -webkit-font-smoothing: antialiased;
  color:#666
}
body,input,button{
  font: 14px Roboto, sans-serif;
}
#root {
  max-width:1400px;
  margin:auto;
  padding:0;
}

button {
  cursor: pointer;
}
`;
