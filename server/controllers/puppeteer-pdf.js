const puppeteer = require('puppeteer');

// Genera un fichero PDF de la URL que recibe
async function crearPdf(url) {

    // Lanza el navegador
    let navegador = await puppeteer.launch();

    // Crea una nueva página
    let pagina = await navegador.newPage();

    // Abre la url
    await pagina.goto(url);

    // Genera el PDF
    let pdf = await pagina.pdf();

    // Cierra el navegador
    navegador.close();

    return pdf;
}


module.exports = {

    proyecto(req, res) {
        res.render('pdfs/proyecto', { layout: "pdf" });
    },

    // Descarga el PDF del proyecto cuya id recibe como parámetro
    async descargar(req, res) {
        let project_id = req.params.project_id;        

        // Crea el documento
        let pdf = await crearPdf(`http://localhost:3000/project/${project_id}`);

        // Devuelve el response como PDF
        res.contentType('application/pdf');
        res.send(pdf);
    }

}