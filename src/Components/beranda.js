import React from 'react';
import './covid.css';
import Masker from '../images/soso.svg';
import Masker2 from '../images/maskerpr.svg';

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <selection className="banner">
                    <div className="textBx">
                        <h2 className="display-4">
                            Waspada Penularan
                            <br/><span>COVID-19</span>
                        </h2>
                        <h3>Penyebab Covid-19 menyebar melalui kontak dengan droplet saluran<br/> 
                            napas penderita yang dihasilkan pada saat SARS-CoV-2  bicara, <br/>
                            batuk, atau bersin. Droplet dapat bertahan di udara dalam beberapa<br/> 
                            waktu tertentu dan sampai jarak tertentu.
                        </h3>
                        <a className="btn btn-dark" href="https://corona.jakarta.go.id/id/faq">Learn More</a>
                    </div>
                    <img src={Masker} alt="masker" className="gambar"></img>
                    <br/><br/><br/>
                </selection>
                <selection className="hallo">
                <img src={Masker2} alt="masker" className="gambar2"></img>
                    <div className="ping">
                        <h2 className="display-4">
                            Apa itu Covid-19?
                        </h2>
                        <h3>Coronavirus Disease 2019 atau Covid-19 adalah penyakit baru yang dapat menyebabkan<br/>
                            gangguan pernapasan dan radang paru. Penyakit ini disebabkan oleh infeksi Severe<br/>
                            Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2). Gejala klinis yang muncul<br/>
                            beragam, mulai dari seperti gejala flu biasa (batuk, pilek, nyeri tenggorokan, nyeri<br/>
                            otot, nyeri kepala) sampai yang berkomplikasi berat (pneumonia atau sepsis) atau bahkan<br/>
                            tidak bergejala sama sekali.
                        </h3>
                        <a className="btn btn-dark" href="https://corona.jakarta.go.id/id/faq">Learn More</a>
                        <br/><br/><br/>
                        <h2 className="display-4">
                            Bagaimana cara penularan Covid-19?
                        </h2>
                        <h3>1. Penyebaran melalui droplet<br/>
                            2. Penyebaran melalui udara<br/>
                            3. Penyebaran melalui permukaan yang terkontaminasi<br/>
                            4. Penyebaran melalui fecal-oral atau limbah manusia
                        </h3>
                        <a className="btn btn-dark" href="https://corona.jakarta.go.id/id/faq">Learn More</a>
                    </div>
                    <br/><br/><br/>
                </selection>
                
                
            </div>
        );
    }
}

export default Beranda;