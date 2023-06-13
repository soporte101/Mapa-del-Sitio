
	ConsultaTransparencia();
	ConsultaServiciosAtencionCiudadania();
	ConsultaMiMunicipio();
	ConsultaNosotros();
	ConsultaParticipa();



	// ** CONSULTA TRANSPARENCIA ** //
	function ConsultaTransparencia() {
		$.ajax({
			url: location.protocol + "//" + location.host + "/Transparencia/_api/web/lists/getbytitle('Páginas')/items?$select=ID,LinkFilename,Title",
			method: "GET",
			headers: { "Accept": "application/json; odata=verbose" },
			success: ImprimirTransparencia,
		});
		
	}
	function ImprimirTransparencia(data) {
		var iteradoTransparencia = document.querySelector('#iteradorTransparencia');
		var resultados = data.d.results;

		for (var i = 0; i < resultados.length; i++) {
			iteradoTransparencia.innerHTML += "<li class='color-default'><a  href='/Transparencia/Paginas/" + resultados[i].LinkFilename + "' target='_blank'>" + resultados[i].Title + "</a></li>";
		}
	}

	// ** CONSULTA CIUDADANOS ** //
	function ConsultaServiciosAtencionCiudadania() {
		$.ajax({
			url: location.protocol + "//" + location.host + "/ServiciosAtencionCiudadania/_api/web/lists/getbytitle('Páginas')/items?$select=ID,LinkFilename,Title",
			method: "GET",
			headers: { "Accept": "application/json; odata=verbose" },
			success: ImprimirServiciosAtencionCiudadania,
		});
		
	}
	function ImprimirServiciosAtencionCiudadania(data) {
		var iteradoCiudadanos = document.querySelector('#iteradorCiudadanos');
		var resultados = data.d.results;

		for (var i = 0; i < resultados.length; i++) {
			iteradoCiudadanos.innerHTML += "<li class='color-default'><a  href='/ServiciosAtencionCiudadania/Paginas/" + resultados[i].LinkFilename + "' target='_blank'>" + resultados[i].Title + "</a></li>";
		}
	}
	
	// ** CONSULTA MI MUNICIPIO ** //
	function ConsultaMiMunicipio() {
		$.ajax({
			url: location.protocol + "//" + location.host + "/MiMunicipio/_api/web/lists/getbytitle('Páginas')/items?$select=ID,LinkFilename,Title",
			method: "GET",
			headers: { "Accept": "application/json; odata=verbose" },
			success: ImprimirMiMunicipio,
		});
		
	}
	function ImprimirMiMunicipio(data) {
		var iteradoMiMunicipio = document.querySelector('#iteradorMiMunicipio');
		var resultados = data.d.results;

		for (var i = 0; i < resultados.length; i++) {
			iteradoMiMunicipio.innerHTML += "<li class='color-default'><a  href='/MiMunicipio/Paginas/" + resultados[i].LinkFilename + "' target='_blank'>" + resultados[i].Title + "</a></li>";
		}
	}

	// ** CONSULTA NUESTRA ALCALDIA ** //
	function ConsultaNosotros() {
		$.ajax({
			url: location.protocol + "//" + location.host + "/Nosotros/_api/web/lists/getbytitle('Páginas')/items?$select=ID,LinkFilename,Title",
			method: "GET",
			headers: { "Accept": "application/json; odata=verbose" },
			success: ImprimirNosotros,
		});
		
	}
	function ImprimirNosotros(data) {
		var iteradoNuestraAlcaldia = document.querySelector('#iteradorNuestraAlcaldia');
		var resultados = data.d.results;
		for (var i = 0; i < resultados.length; i++) {
			iteradoNuestraAlcaldia.innerHTML += "<li class='color-default'><a  href='/Nosotros/Paginas/" + resultados[i].LinkFilename + "' target='_blank'>" + resultados[i].Title + "</a></li>";
		
		}
	}

	// ** CONSULTA COMUNICACIONES ** //
	function ConsultaParticipa() {
		$.ajax({
			url: location.protocol + "//" + location.host + "/Participa/_api/web/lists/getbytitle('Páginas')/items?$select=ID,LinkFilename,Title",
			method: "GET",
			headers: { "Accept": "application/json; odata=verbose" },
			success: ImprimirParticipa,
		});
		
	}
	function ImprimirParticipa(data) {
		var iteradoComunicaciones = document.querySelector('#iteradorComunicaciones');
		var resultados = data.d.results;

		for (var i = 0; i < resultados.length; i++) {
			iteradoComunicaciones.innerHTML += "<li class='color-default'><a  href='/Participa/Paginas/" + resultados[i].LinkFilename + "' target='_blank'>" + resultados[i].Title + "</a></li>";
		}
	}