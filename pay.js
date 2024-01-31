function pagar() {
    const amount = 10;
   const callback = (response) => {
       console.log(response)
     // Los valores de la respuesta son: 
     // ok: boolean, (true en caso de ser exitosa, false en caso de ser fallida)
     // description: string, (descripción de la transacción)
     // transactionId: string, (referencia bancaria de la transacción)
     // Ejemplo: { ok: true, description: 'Pago exitoso', transactionId: '1858749961512' }
   };

   payWithPuntoYa(amount, callback); 
  
}