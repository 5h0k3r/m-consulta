const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
    [
        
    ],
    {
        images: {
            domains: ['www.e-consulta.com', 'fotos.e-consulta.com'],
        },
        env: {
            localurl: 'https://mob2021.e-consulta.com',
            eConsultaMainNota: 'https://da21w.e-tlaxcala.mx/index.php/galeria',
            eConsultaMasLeidas: 'https://da21w.e-tlaxcala.mx/index.php/getRemoteMasleidas',
            eConsultaAlMomento: 'https://da21w.e-tlaxcala.mx/index.php/getRemoteAlmomento',
            eConsultaMunicipios: 'https://da21w.e-tlaxcala.mx/index.php/municipios',
            eConsultaNotasSoft: 'https://da21w.e-tlaxcala.mx/index.php/',
            eConsultaCorte: 'https://da21w.e-tlaxcala.mx/index.php/corte',
            eConsultaMultimedia: 'https://da21w.e-tlaxcala.mx/index.php/multimedia',
            eConsultaNota: 'https://da21w.e-tlaxcala.mx/index.php/nota/',
            eConsultaOpinion: 'https://da21w.e-tlaxcala.mx/index.php/opinion/',
            eConsultaImagenes: 'http://fotos.e-consulta.com/',
            eConsultaCanonical: 'https://mob2021.e-consulta.com/',
            eConsultaSeccion: 'https://da21w.e-tlaxcala.mx/index.php/seccion/',
            eConsultaOpinionList: 'https://da21w.e-tlaxcala.mx/index.php/opinionList/',
            eConsultaImagenPrincipal: 'https://www.e-consulta.com/fotos/galeria1/',
            eConsultaImagenSecundaria: 'https://www.e-consulta.com/fotos/galeria2/',
            eConsultaOpinionModule: 'https://da21w.e-tlaxcala.mx/index.php/opinionModule',
            eConsultaBlogs: 'https://da21w.e-tlaxcala.mx/index.php/blogs',
            eConsultaTags: 'https://da21w.e-tlaxcala.mx/index.php/tags/',
            eConsultaAutores: 'https://da21w.e-tlaxcala.mx/index.php/autor/',
            eConsultaAutoresOpinion: 'https://da21w.e-tlaxcala.mx/index.php/autores/',
            eConsultaMediosExternos: 'https://da21w.e-tlaxcala.mx/index.php/medios-externos/'
        } 
    }
)