import React from "react";
import MediaComment from "./mediaComment";

const MainInfoBuddy = () => {
	return (
		<main className="main-info">
			<section className="about-buddy">
				<h4 className="font-weight-bold">Sobre mi</h4>
				<div className="about-buddy-body">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error, veritatis, ex cumque
						laboriosam, minus ipsum nesciunt vitae tempora aspernatur explicabo sequi deleniti dolores
						labore sit magnam nihil repellat fuga doloribus eos. Magni mollitia aliquam corporis praesentium
						consequuntur aliquid consectetur?
					</p>
					<p>
						Veritatis laudantium iste veniam possimus est, error facere non distinctio debitis illum, sint
						dolorem et esse enim eveniet, commodi expedita. Quos consequatur, voluptatibus voluptas iusto
						temporibus impedit nisi cum. Nesciunt odit numquam corporis. Minus vel eum aliquam veniam nisi
						consequatur.
					</p>
					<p>
						Itaque aspernatur inventore nulla rem porro, qui cum tempora aperiam, aliquid deleniti ratione
						non! Dolorum repudiandae, eveniet laborum adipisci quo quidem omnis pariatur, nihil unde
						voluptatem aspernatur, quas obcaecati quod itaque similique iste repellendus non culpa incidunt
						iusto illum earum.
					</p>
				</div>
			</section>
			<section className="map-section-buddy mt-5">
				<h4 className="font-weight-bold">Localización</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus molestiae assumenda,
					sint at similique.
				</p>
				<div className="w-100 border" style={{ height: "200px" }}>
					MAPA AQUI
				</div>
			</section>
			<section className="review-section mt-5">
				<h4 className="font-weight-bold">¿Qué opinan mis clientes?</h4>
				<MediaComment />
				<MediaComment />
				<MediaComment />
			</section>
		</main>
	);
};

export default MainInfoBuddy;