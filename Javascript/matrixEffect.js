const renderCanv = () => {

    const canvas = document.getElementById('canv');
    const ctx = canvas.getContext('2d');

    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    function matrix () {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
    
        // Set color to green and font to 15pt monospace in the drawing context
        ctx.fillStyle = 'rgb(51,51,255)';
        ctx.font = '15pt monospace';
    
        // for each column put a random character at the end
        ypos.forEach((y, ind) => {
          // generate a random character
          const text = String.fromCharCode(Math.random() * 128);
        
          // x coordinate of the column, y coordinate is already given
          const x = ind * 20;
          // render the character at (x, y)
          ctx.fillText(text, x, y);
        
          // randomly reset the end of the column if it's at least 100px high
          if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
          // otherwise just move the y coordinate for the column 20px down,
          else ypos[ind] = y + 20;
        });
      }

      // render the animation at 20 FPS.
      setInterval(matrix, 50);
    }
renderCanv()

  const renderCanv2 = () => {
    const canvas = document.getElementById('canv2');
    const ctx = canvas.getContext('2d');
    
    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
    
    function matrix () {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
      
        // Set color to green and font to 15pt monospace in the drawing context
        ctx.fillStyle = 'rgb(51,51,255)';
        ctx.font = '15pt monospace';
      
        // for each column put a random character at the end
        ypos.forEach((y, ind) => {
          // generate a random character
          const text = String.fromCharCode(Math.random() * 128);
      
          // x coordinate of the column, y coordinate is already given
          const x = ind * 20;
          // render the character at (x, y)
          ctx.fillText(text, x, y);
      
          // randomly reset the end of the column if it's at least 100px high
          if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
          // otherwise just move the y coordinate for the column 20px down,
          else ypos[ind] = y + 20;
        });
      }
      
      // render the animation at 20 FPS.
      setInterval(matrix, 50);    
  }

  renderCanv2()