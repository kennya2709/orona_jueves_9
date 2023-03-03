import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login_form() {   

    return (
       
                <form>

                    <h4 class="modal-title" id="exampleModalLongTitle" align="center">APP PARCIAL II</h4><br />
                    <div class="form-outline mb-2">

                        <label class="form-label" for="form2Example1">Correo Electrónico:</label><br />
                        <input type="email" id="form2Example1" class="form-control form-control-sm" />

                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password:</label>
                        <input type="password" id="form2Example2" class="form-control form-control-sm" />

                    </div>


                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Recordarme </label>
                            </div>
                        </div>

                        <div class="col">

                            <a href="#!">Olvidaste tu contraseña?</a>
                        </div>
                    </div>


                    <center><button type="button" class="btn btn-primary btn-sm">INGRESAR</button></center>


                    <div class="text-center">
                        <p>No eres usuario? <a href="#!">Registrarse</a></p>
                        <p>o ingresa con :</p>

                        <button type="button" class="btn btn-link btn-floating mx-1"
                        
                        >                       
                            <i class="fab fa-google"></i>
                        </button>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                    </div>

                </form>
          
   
          
   
          
    );
    <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='facebook-f' size="sm"/>
    </MDBBtn>

   

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='google' size="sm"/>
    </MDBBtn>
    </div>
}

export default Login_form;