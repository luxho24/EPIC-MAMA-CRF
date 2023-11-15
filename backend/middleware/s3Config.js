import AWS from 'aws-sdk';

// Crea una función que configure la API de Amazon S3
function configureS3() {
  // Configura las credenciales de AWS
  AWS.config.update({
    accessKeyId: 'AKIAUVRDR6AJXHSOM5ND',
    secretAccessKey: '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',
  });

  // Crea un nuevo objeto S3
  const s3 = new AWS.S3();

  // Comparte el objeto S3 con todos los componentes
  global.s3 = s3;
}

// Devuelve la función como un middleware
export default configureS3;