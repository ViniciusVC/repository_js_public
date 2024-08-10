module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Nota: nós fornecemos o webpack acima, para que você não precise dele
      // Realiza personalizações na configuração do webpack
      // Importante: retorna a configuração modificada
      // Example using webpack option
      //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      // node: {
      //   fs: 'empty'
      // }
      return config
  },
  webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      // node: {
      //   fs: 'empty'
      // }
      return config
  },
  exportPathMap: function () {
      // Esta lista de paginas só é gerada quando exportamos arquivos estáticos.
      return {
        '/': { page: '/' },
        '/amp/': { page: '/routes/amp' },
        '/amp/meusdocumentos/': { page: '/routes/amp/meusdocumentos/meusdocumentos' },
        '/amp/home/': { page: '/routes/amp/home' },
        '/amp/lp-assine-pos/': { page: '/routes/amp/lp-assine-pos' },
        
        '/amp/minha-vvc/': { page: '/amp/minha-vvc/' },
        '/amp/minha-vvc/segunda-via/': { page: '/amp/minha-vvc/segunda-via/' },
        '/amp/minha-vvc/codigo-de-barras/': { page: '/amp/minha-vvc/codigo-de-barras/' },
        '/amp/minha-vvc/atendimento-vvc/': { page: '/amp/minha-vvc/atendimento-vvc/' },
        '/amp/recarga/': { page: '/amp/recarga/' },

        '/amp/vvc-com/portabilidade': { page: '/amp/vvc-com/portabilidade' },

        '/amp/portabilidade': { page: '/amp/portabilidade/index' },



        '/meusdocumentos/ajudadocumentos/': { page: '/routes/meusdocumentos/ajudadocumentos' },
        '/meusdocumentos/ajudaselfie/': { page: '/routes/meusdocumentosa/judaselfie' },
        '/meusdocumentos/': { page: '/routes/meusdocumentos' },
        '/home/': { page: '/routes/home' },
        '/lp-assine-pos/': { page: '/routes/lp-assine-pos' },
        '/mapacobertura/': { page: '/routes/mapacobertura' },

        '/minha-vvc/': { page: '/minha-vvc/' },
        '/minha-vvc/segunda-via/': { page: '/minha-vvc/segunda-via/' },
        '/minha-vvc/codigo-de-barras/': { page: '/minha-vvc/codigo-de-barras/' },
        '/minha-vvc/atendimento-vvc/': { page: '/minha-vvc/atendimento-vvc/' },
        '/recarga/': { page: '/recarga/' },

        '/vvc-play/': { page: '/vvc-play/' },
      }
    }
  }

  
  


  




// next.config.js não é transformado por Babel.
// Portanto, você só pode usar os recursos javascript suportados pela sua versão do Node.js.
 
/*
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Nota: nós fornecemos o webpack acima, para que você não precise dele
        // Realiza personalizações na configuração do webpack
        // Importante: retorna a configuração modificada

        // Example using webpack option
        //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
  }
*/

// buildId - (String) ID da compilação usado como um identificador exclusivo entre compilações.
// dev - (Booleano) Mostra se a compilação é feita no modo de desenvolvimento
// isServer - (Booleano) mostra se a configuração resultante será usada para compilação no lado do servidor (true) ou no lado do cliente (false)
// defaultLoaders - (Objeto) Contém objetos do carregador O Next.js usa internamente, para que você possa usá-los na configuração personalizada
// babel - (Objeto) Configuração do babel-loader para Next.js

/*
99/5000
A solução alternativa é suficiente e o bug está realmente no webpack, relacionado ao fs no destino da web.
*/