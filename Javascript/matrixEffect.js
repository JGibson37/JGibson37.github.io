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
  
        ctx.fillStyle = 'rgb(51,51,255)';
        ctx.font = '15pt monospace';
    
        ypos.forEach((y, ind) => {
          const text = String.fromCharCode(Math.random() * 128);
          const x = ind * 20;
          ctx.fillText(text, x, y);
          if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
          else ypos[ind] = y + 20;
        });
      }
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
        ctx.fillStyle = 'rgb(51,51,255)';
        ctx.font = '15pt monospace';
        ypos.forEach((y, ind) => {
          const text = String.fromCharCode(Math.random() * 128);
          const x = ind * 20;
          ctx.fillText(text, x, y);
          if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
          else ypos[ind] = y + 20;
        });
      }
      setInterval(matrix, 50);    
  }

  renderCanv2()