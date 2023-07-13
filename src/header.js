import React from 'react'

function header() {
  return (
    <div>
      
<header>
		<div className="parte1">
			<div className="RedesSociales">
				<ul>
					<li>
						<a href="https://www.facebook.com/RicolinoOficial/?locale=es_LA" id="fac"><i
								class="bi bi-facebook"></i></a>
					</li>
					<li>
						<a href="https://twitter.com/ricolinomx?lang=es" id="twi"><i class="bi bi-twitter"></i></a>
					</li>
					<li>
						<a href="https://www.instagram.com/ricolinomx/?hl=es" id="ins"><i
								class="bi bi-instagram"></i></a>
					</li>
					<li>
 
					</li>
				</ul>
			</div>
			<div className="Nombre">
				<h1 id="nom">Ricoline</h1>
			</div>
			<div className="loginCarr">
				<ul>
					<li>
						<a href="login_registro.html" id="login"><i class="bi bi-person-circle"></i> login</a>
					</li>
					<br></br>
					<li>
						<a href="carrito.html" id="carrito"><i class="bi bi-cart4"></i> Carrito</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="parte2">
			<div className="menu">
				<ul>
					<li>
						<a href="Index.html" id="ini">| Inicio |</a>
					</li>

					<li>
						<a href="categorias.html" id="cat">| Categorias |</a>
					</li>

					<li>
						<a href="promociones.html" id="prom">| Promociones |</a>
					</li>
				</ul>
			</div>
			<div className="buscar">
				<form class="d-flex" role="search">
					<i class="bi bi-search" id="lupa"></i>
					<input type="search" placeholder="" id="espacio"></input>
				</form>
			</div>
		</div>
	</header>

    </div>
  )
}

export default header
