
const svgCaptcha = require('svg-captcha'); // Instanciar biblioteca memory-cache (gera rador do SVG)
var cache = require('memory-cache'); // Instanciar o memory-cache (Variavel global)

console.log('Instanciou /api1/captcha/');

// Guardar variavies globais/session.
// https://www.npmjs.com/package/memory-cache

exports.api = function(req, res, next) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║      captcha API                       ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('/api1/captcha/ (Gerando captcha...)');
    //var varcaptcha = svgCaptcha.create({size: 6, ignoreChars: '0Oo1iIl', noise: 2});
    var varcaptcha = svgCaptcha.create({size: 5, ignoreChars: 'qwertyuiopasdfghjklçzxcvbnm0O1I', noise: 2});
    var sessao = "x";
    if(req.query.sessao!=undefined){sessao=req.query.sessao};
    
    cache.put(sessao, varcaptcha.text, 3300000); // criar uma variavel global
    // 3300000 milesegundos == 55 minutos
    console.log("Guardou o captcha "+varcaptcha.text+" na variavel global " + sessao + ", por 55 minutos");
    
    res.type('svg');
    res.status(200).send(varcaptcha.data);
};


    //===========================================
    // cache.put('houdini', varcaptcha.text, 100, function(key, value) {
    //     // Tempo em milesegundos
    //     console.log(key + ' did ' + value); // mostra "Houdini will now disappear"
    // });
    // console.log('Houdini will now ' + cache.get('houdini')); // Mostra "houdini did disappear"       
    // setTimeout(function() {
    //     console.log('Houdini is ' + cache.get('houdini')); //Mostra "Houdini is null"
    // }, 2000);
    //===========================================



