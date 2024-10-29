export const apiUrl = ( url: string ) => {
  if ( !url.startsWith( 'http' ) ) {
    if ( !url.startsWith( '/' ) ) url = '/' + url;
    url = `http://hh.wi-studio.ru/api${ url }`;
    console.log( '==================', url )
  }

  return url;
}

export const stringToArray = ( string: string ): string[] => {
  return string.split( /\r?\n/ )
}
