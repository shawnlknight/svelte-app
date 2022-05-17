<h1 data-shadow='Hello!'>Hello!</h1>

<style>
  	*, *:before, *:after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		position: relative;
  }
  
  h1 {
		display: inline-block;
		color: #67be55;
		font-family: 'Creepster', sans-serif;
		font-size: 12em; 
		letter-spacing: 10px;
		text-shadow: .03em .03em 0 rgb(24, 23, 23);
  }
	
  h1:after {
    content: attr(data-shadow);
    position: absolute;
    top: .06em; left: .06em;
    z-index: -1;
    text-shadow: none;
    background-image:
      linear-gradient(
        45deg,
        transparent 45%,
        rgb(250, 195, 30) 45%,
        rgb(250, 195, 30) 55%,
        transparent 0
			);
    background-size: .05em .05em;
		background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shad-anim 15s linear infinite;
	}

	@keyframes shad-anim {
		0% {background-position: 0 0}
		0% {background-position: 100% -100%}
  }

  @media (max-width: 640px) {
		h1 {
			font-size: 5em;
		}
	}
</style>