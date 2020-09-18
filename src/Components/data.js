import React from 'react';
import './covid.css';   
import Peta from '../images/peta.png';

class Data extends React.Component{
    render(){
        return(
            <div>
                <selection className="banner">
                    <div className="textBx">
                        <h2 className="display-4">
                            DATA PENULARAN
                            <br/><span>COVID</span>
                        </h2>
                        <a className="btn btn-dark" href="https://corona.jakarta.go.id/id/faq">Learn More</a>
                    </div>
                    <img src={Peta} alt="peta" className="peta"></img>
                    <br/><br/><br/>
                </selection>
                <selection className="data">
                    <center>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card text-white bg-info mb-5 carddata1">
                                <div className="card-header">232,628</div>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">TERKONFIRMASI</h5>
                                        <p className="card-text">
                                            +3,635 Kasus
                                        </p>
                                        </center>
                                    </div>
                            </div> 
                        </div>
                        <div className="col-sm-3">
                            <div className="card text-white bg-warning mb-5 carddata2">
                                <div className="card-header">56,720</div>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">KASUS AKTIF</h5>
                                        <p className="card-text">
                                            24.4% dari Terkonfirmasi
                                        </p>
                                        </center>
                                    </div>
                            </div> 
                        </div>
                        <div className="col-sm-3">
                            <div className="card text-white bg-success mb-5 carddata2">
                                <div className="card-header">166,686</div>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">SEMBUH</h5>
                                        <p className="card-text">
                                            71.7% dari Terkonfirmasi
                                        </p>
                                        </center>
                                    </div>
                            </div> 
                        </div>
                        <div className="col-sm-3">
                            <div className="card text-white bg-danger mb-5 carddata2">
                                <div className="card-header">9,222</div>
                                    <div className="card-body">
                                        <center>
                                        <h5 className="card-tittle">MENINGGAL</h5>
                                        <p className="card-text">
                                            4.0% dari Terkonfirmasi
                                        </p>
                                        </center>
                                    </div>
                            </div> 
                        </div>
                    </div>
                    <div>
                        <br/><br/>
                        <h1 className="text-white">KASUS PER PROVINSI</h1>
                        <br/>
                        <center>
                        <table className="table table-bordered table-striped text-white align-center">
                            <thead>
                                <tr>
                                    <th>Provinsi</th>
                                    <th>Terkonfirmasi</th>
                                    <th>Meninggal</th>
                                    <th>Sembuh</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>DKI Jakarta</th>
                                    <th>58582</th>
                                    <th>1495</th>
                                    <th>45123</th>
                                </tr>
                                <tr>
                                    <th>Jawa Timur</th>
                                    <th>39508</th>
                                    <th>2896</th>
                                    <th>31866</th>
                                </tr>
                                <tr>
                                    <th>Jawa Tengah</th>
                                    <th>18744</th>
                                    <th>1195</th>
                                    <th>11862</th>
                                </tr>
                                <tr>
                                    <th>Jawa Barat</th>
                                    <th>15584</th>
                                    <th>309</th>
                                    <th>8650</th>
                                </tr>
                                <tr>
                                    <th>Sulawesi Selatan</th>
                                    <th>13867</th>
                                    <th>386</th>
                                    <th>10357</th>
                                </tr>
                                <tr>
                                    <th>Kalimantan Selatan</th>
                                    <th>9547</th>
                                    <th>392</th>
                                    <th>7624</th>
                                </tr>
                                <tr>
                                    <th>Sumatera Utara</th>
                                    <th>9051</th>
                                    <th>379</th>
                                    <th>5390</th>
                                </tr>
                                <tr>
                                    <th>Bali</th>
                                    <th>7492</th>
                                    <th>194</th>
                                    <th>5979</th>
                                </tr>
                                <tr>
                                    <th>Kalimantan Timur</th>
                                    <th>6486</th>
                                    <th>255</th>
                                    <th>4135</th>
                                </tr>
                                <tr>
                                    <th>Sumatera Selatan</th>
                                    <th>5233</th>
                                    <th>316</th>
                                    <th>3857</th>
                                </tr>
                                <tr>
                                    <th>Papua</th>
                                    <th>4836</th>
                                    <th>64</th>
                                    <th>3448</th>
                                </tr>
                                <tr>
                                    <th>Riau</th>
                                    <th>4462</th>
                                    <th>92</th>
                                    <th>1817</th>
                                </tr>
                                <tr>
                                    <th>Sulawesi Utara</th>
                                    <th>4212</th>
                                    <th>165</th>
                                    <th>3270</th>
                                </tr>
                                <tr>
                                    <th>Banten</th>
                                    <th>3895</th>
                                    <th>122</th>
                                    <th>2602</th>
                                </tr>
                                <tr>
                                    <th>Sumatera Barat</th>
                                    <th>3868</th>
                                    <th>86</th>
                                    <th>1985</th>
                                </tr>
                                <tr>
                                    <th>Aceh</th>
                                    <th>3236</th>
                                    <th>127</th>
                                    <th>1100</th>
                                </tr>
                                <tr>
                                    <th>Kalimantan Tengah</th>
                                    <th>3123</th>
                                    <th>121</th>
                                    <th>2407</th>
                                </tr>
                                <tr>
                                    <th>Nusa Tenggara Barat</th>
                                    <th>3009</th>
                                    <th>177</th>
                                    <th>2386</th>
                                </tr>
                                <tr>
                                    <th>Maluku</th>
                                    <th>2503</th>
                                    <th>38</th>
                                    <th>1526</th>
                                </tr>
                                <tr>
                                    <th>Gorontalo</th>
                                    <th>2341</th>
                                    <th>67</th>
                                    <th>2091</th>
                                </tr>
                                <tr>
                                    <th>Sulawesi Tenggara</th>
                                    <th>2043</th>
                                    <th>46</th>
                                    <th>1350</th>
                                </tr>
                                <tr>
                                    <th>DI Yogyakarta</th>
                                    <th>1984</th>
                                    <th>53</th>
                                    <th>1440</th>
                                </tr>
                                <tr>
                                    <th>Maluku Utara</th>
                                    <th>1972</th>
                                    <th>72</th>
                                    <th>1775</th>
                                </tr>
                                <tr>
                                    <th>Kepulauan Riau</th>
                                    <th>1494</th>
                                    <th>50</th>
                                    <th>871</th>
                                </tr>
                                <tr>
                                    <th>Papua Barat</th>
                                    <th>1333</th>
                                    <th>25</th>
                                    <th>732</th>
                                </tr>
                                <tr>
                                    <th>Kalimantan Barat</th>
                                    <th>825</th>
                                    <th>7</th>
                                    <th>670</th>
                                </tr>
                                <tr>
                                    <th>Lampung</th>
                                    <th>687</th>
                                    <th>26</th>
                                    <th>428</th>
                                </tr>
                                <tr>
                                    <th>Bengkulu</th>
                                    <th>510</th>
                                    <th>30</th>
                                    <th>271</th>
                                </tr>
                                <tr>
                                    <th>Kalimantan Utara</th>
                                    <th>483</th>
                                    <th>3</th>
                                    <th>412</th>
                                </tr>
                                <tr>
                                    <th>Sulawesi Barat</th>
                                    <th>482</th>
                                    <th>7</th>
                                    <th>360</th>
                                </tr>
                                <tr>
                                    <th>Jambi</th>
                                    <th>351</th>
                                    <th>8</th>
                                    <th>249</th>
                                </tr>
                                <tr>
                                    <th>Kepulauan Bangka Belitung</th>
                                    <th>305</th>
                                    <th>3</th>
                                    <th>246</th>
                                </tr>
                                <tr>
                                    <th>Nusa Tenggara Timur</th>
                                    <th>302</th>
                                    <th>5</th>
                                    <th>175</th>
                                </tr>
                                <tr>
                                    <th>Sulawesi Tengah</th>
                                    <th>278</th>
                                    <th>11</th>
                                    <th>232</th>
                                </tr>
                            </tbody>
                        </table>
                        </center>
                    </div>
                    </center>
                </selection>
            </div>
        );
    }
}

export default Data;