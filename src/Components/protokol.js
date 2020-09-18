import React from 'react';
import Home from '../images/home.svg';
import Masker from '../images/masker.svg';
import Maksimal from '../images/maksimal.svg';
import Peringatan from '../images/peringatan.svg';

class Protokol extends React.Component{
    render(){
        return(
            <div>
                <selection className="protocol">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col mb-4">
                                <div className="card card1">
                                    <br/>
                                    <img className="card-img-top" src={Home} alt="home"/>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">STAY AT HOME</h5>
                                        <p className="card-text">
                                            Tidak keluar jika tidak ada<br/> 
                                            kepentingan yang mendesak.
                                        </p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card card2">
                                    <br/>
                                    <img className="card-img-top" src={Masker} alt="masler"/>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">SELALU JALANKAN 3M</h5>
                                        <p className="card-text">
                                            1. Memakai masker dengan benar saat pergi<br/>
                                            2. Mencuci tangan dengan sabun dan air yang mengalir<br/>
                                            3. Menjaga jarak aman 1,5-2 meter dengan orang lain
                                        </p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card card3">
                                    <br/>
                                    <img className="card-img-top" src={Maksimal} alt="maksimal"/>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">MAKSIMAL 50%</h5>
                                        <p className="card-text">
                                            Seluruh kegiatan yang diizinkan beroperasi harus beroperasi<br/> 
                                            dalam kapasitas maksimal 50% dan menjalankan protokol kesehatan
                                            dengan ketat.
                                        </p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <br/><br/>
                            <div className="col mb-4">
                                <div className="card card4">
                                    <br/>
                                    <img className="card-img-top" src={Peringatan} alt="peringatan"/>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">INGATKAN SESAMA</h5>
                                        <p className="card-text">
                                            Saling mengingatkan untuk menjalankan
                                            protokol kesehatan.
                                        </p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </selection>
            </div>
        );
    }
}

export default Protokol;