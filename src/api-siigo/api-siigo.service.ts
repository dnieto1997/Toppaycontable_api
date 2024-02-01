import { Injectable } from '@nestjs/common';


@Injectable()
export class ApiSiigoService {
  public accessToken: string;
  public scope: string;
    
async Loginsiigo(){
    
    return new Promise((resolve, reject) => {
        interface AuthRequest {
            username: string;
            access_key: string;
        }

        const authRequest: AuthRequest = {
            username: process.env.USUARIO,
            access_key: process.env.ACCESSKEY,
        };
        const url = `${process.env.URL}${"auth"}`

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authRequest),
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.text())
            .then((result) => {
                const { access_token, scope } = JSON.parse(result) as any
                this.accessToken = access_token;
                this.scope = scope;
                resolve(result);
            })
            .catch(error => {
                console.log(error)
                resolve(error);
            });


    });
 
}


async TiposComprobantes(){
  if (!this.accessToken) {
    await this.Loginsiigo(); 
  }
    return new Promise((resolve, reject) => {
         

      const url = `${process.env.URL}${"/v1/document-types?type=CC"}`

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Partner-Id':` ${this.scope}`
            },
            redirect: 'follow'
        };
                
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
          
            })
            .catch(error => {
                console.log(error)
                resolve(error);
            });


    });
 
}


async ListaClientes(){
  if (!this.accessToken) {
    await this.Loginsiigo(); 
  }
    return new Promise((resolve, reject) => {
         

      const url = `${process.env.URL}${"/v1/customers"}`

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Partner-Id':` ${this.scope}`
            },
            redirect: 'follow'
        };
            
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
             
            })
            .catch(error => {
                console.log(error)
                resolve(error);
            });


    });
 
}


async typepayment(){
  if (!this.accessToken) {
    await this.Loginsiigo(); 
  }
    return new Promise((resolve, reject) => {
         

      const url = `${process.env.URL}${"v1/account-groups"}`

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Partner-Id':` ${this.scope}`
            },
            redirect: 'follow'
        };
            
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
              
            })
            .catch(error => {
                console.log(error)
                resolve(error);
            });


    });
 
}


async debito(body: any){
  const{array,fecha,documentid,cuentacontable} =body
 
 
  const fechaact = this.obtenerFechaActualConFormato();
  if (!this.accessToken) {
     await this.Loginsiigo(); 
 
   }

   console.log(this.accessToken)
   
   console.log(this.scope)
   
   const url = `${process.env.URL}${"v1/journals"}`;

   const results = [];

   for (const item of array) {
     const raw = JSON.stringify({
       "document": {
         "id": `${documentid}`
       },
       "date": fecha,
       "items": [
         {
           "account": {
             "code": "28050501", 
             "movement": "Debit"
           },
           "customer": {
             "identification": "23678535",
             "branch_office": "0"
           },
           "description": "Descripción opcional del debito",
           "value": item.total,
           "due": {
             "prefix": "CC",
             "consecutive": 1,
             "quote": 1,
             "date": `${fechaact}`
           }
         },
         {
           "account": {
             "code": "28050501", 
             "movement": "Credit"
           },
           "customer": {
             "identification": "23678535", 
             "branch_office": "0"
           },
           "description": "Descripción opcional del credito",
           "value": item.total,
           "due": {
            "prefix": "CC",
            "consecutive": 1,
            "quote": 1,
            "date": `${fechaact}`
          }
         }
       ],
       "observations": "Observaciones"
     });

     const requestOptions: RequestInit = {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${this.accessToken}`,
         'Partner-Id': `${this.scope}`,
         'Content-Type': 'application/json',
       },
       body: raw,
       redirect: 'follow'
     };
         
     try {
       const response = await fetch(url, requestOptions);
       const result = await response.json();


     } catch (error) {
       console.error(error);
     
     }
   }

   return {
    result:results,
    message:"Se ha completado el registro a Siigo",
    status:201
  }

   
 
}


async credito(body) {
  const { array, fecha, documentid, cuentacontable } = body;
  const fechaact = this.obtenerFechaActualConFormato();

  if (!this.accessToken) {
    await this.Loginsiigo();
  }

  const url = `${process.env.URL}${"v1/journals"}`;

  const requests = array.map(item => {
    const raw = JSON.stringify({
      "document": {
        "id": `${documentid}`
      },
      "date": fecha,
      "items": [
        {
          "account": {
            "code": "28050501",
            "movement": "Credit"
          },
          "customer": {
            "identification": "23678535",
            "branch_office": "0"
          },
          "description": "Descripción opcional del debito",
          "value": item.total,
          "due": {
            "prefix": "CC",
            "consecutive": 1,
            "quote": 1,
            "date": fechaact
          }
        },
        {
          "account": {
            "code": "28050501",
            "movement": "Debit"
          },
          "customer": {
            "identification": "23678535",
            "branch_office": "0"
          },
          "description": "Descripción opcional del credito",
          "value": item.total,
          "due": {
            "prefix": "CC",
            "consecutive": 1,
            "quote": 1,
            "date": fechaact
          }
        }
      ],
      "observations": "Observaciones"
    });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Partner-Id': `${this.scope}`,
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow'
    };

    return fetch(url, requestOptions)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        return null; // Puedes manejar errores según tus necesidades
      });
  });

  const results = await Promise.all(requests);
  console.log(results)
  

  return {
    result:results,
    message:"Se ha completado el registro a Siigo",
    status:201
  }
}



  findAll() {
    return `This action returns all apiSiigo`;
  }
  obtenerFechaActualConFormato(): string {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Sumar 1 porque los meses van de 0 a 11
    const day = String(fechaActual.getDate()).padStart(2, '0');

    const fechaFormateada = `${year}-${month}-${day}`;
    return fechaFormateada;
  }
  
}
