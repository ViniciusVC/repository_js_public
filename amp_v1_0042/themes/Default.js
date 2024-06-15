const Default = {
  container: '1366px',
  body: {
    bg: '#FFFFFF',
    color: '#900AE9',
    margin: '0',
    padding: '0',
    font: {
      family: 'Simplon , VVCTextRegular, simplon_bpregular, sans-serif',
      weight: 'Regular'
    }
  },
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    desktopLarge: 1366
  },
  grid: {
    mobile: {
      columns: 6,
      gutter: 8,
      container: 280
    },
    tablet: {
      columns: 6,
      gutter: 24,
      container: 696
    },
    desktop: {
      columns: 12,
      gutter: 24,
      container: 936
    },
    desktopLarge: {
      columns: 12,
      gutter: 24,
      container: 1224
    }
  },
  titles: {
    font: 'SimplonHeadline',
    color: '#000',
    size: {
      h1: '4.2rem',
      h2: '2.4rem',
      h3: '1.8rem',
      h4: '1.6rem',
      h5: '1.3rem',
      h6: '1.0rem'
    }
  },
  buttons: {
    font: {
      family: 'Simplon, VVCTextRegular, simplon_bpregular, sans-serif',
      weight: 'Medium'
    }
  },
  inner: {
    opacity: 1
  },
  colors: {
    primary: '#d82482',
    secondary: '#900AE9',
    success: '#07CC14',
    error: '#D4006E',
    warning: '#D4006E',
    danger: '#FA001F',
    info: '#009DF7',
    light: '#f7f7f7',
    dark: '#222222',
    link: '#FFFFFF',
    gray: '#909090',
    white: '#fff',
    lightgray: '#cfcfcf'
  },
  gradients: {
    primary: {
      0: '#ff6d00',
      100: '#ea288c'
    },
    secondary: {
      0: '#51beb9',
      100: '#51b368'
    },
    success: {
      0: '#07CC14',
      100: '#61cc66'
    },
    error: {
      from: '#ca3a48',
      to: '#ca665e'
    },
    warning: {
      from: '#cc743c',
      to: '#cc9a67'
    },
    info: {
      from: '#009DF7',
      to: '#75c8f7'
    },
    light: {
      from: '#d9d9d9',
      to: '#f9f9f9'
    },
    dark: {
      from: '#343434',
      to: '#555555'
    },
    link: {
      from: '#6f8cda',
      to: '#9ca8da'
    }
  }
};
export default Default;
