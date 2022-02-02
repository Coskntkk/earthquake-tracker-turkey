function Province({setProvince}) {

    function handleProvince(e){
        e.preventDefault();
        setProvince(e.target.value);
    }

    return (
        <div className="provinces">
        <label className="input-group-text" htmlFor="inputGroupSelect01" style={{fontSize: "1vw"}}>Provinces</label>
        <div className="input-group mb-3" style={{fontSize: "1vw"}}>
            <form onChange={(e) => handleProvince(e)}>
            <select className="form-select" id="inputGroupSelect01">
                <option value="" selected>All</option>
                <option value="ANKARA">Ankara</option>
                <option value="ISTANBUL">İstanbul</option>
                <option value="IZMIR">İzmir</option>
                <option value="ADANA">Adana</option>
                <option value="ADIYAMAN">Adıyaman</option>
                <option value="AFYONKARAHISAR">Afyonkarahisar</option>
                <option value="AGRI">Ağrı</option>
                <option value="AKSARAY">Aksaray</option>
                <option value="AMASYA">Amasya</option>
                <option value="ANTALYA">Antalya</option>
                <option value="ARDAHAN">Ardahan</option>
                <option value="ARTVIN">Artvin</option>
                <option value="AYDIN">Aydın</option>
                <option value="BALIKESIR">Balıkesir</option>
                <option value="BARTIN">Bartın</option>
                <option value="BATMAN">Batman</option>
                <option value="BAYBURT">Bayburt</option>
                <option value="BILECIK">Bilecik</option>
                <option value="BINGOL">Bingöl</option>
                <option value="BITLIS">Bitlis</option>
                <option value="BOLU">Bolu</option>
                <option value="BURDUR">Burdur</option>
                <option value="BURSA">Bursa</option>
                <option value="CANAKKALE">Çanakkale</option>
                <option value="CANKIRI">Çankırı</option>
                <option value="CORUM">Çorum</option>
                <option value="DENIZLI">Denizli</option>
                <option value="DIYARBAKIR">Diyarbakır</option>
                <option value="DUZCE">Düzce</option>
                <option value="EDIRNE">Edirne</option>
                <option value="ELAZIG">Elazığ</option>
                <option value="ERZINCAN">Erzincan</option>
                <option value="ERZURUM">Erzurum</option>
                <option value="ESKISEHIR">Eskişehir</option>
                <option value="GAZIANTEP">Gaziantep</option>
                <option value="GIRESUN">Giresun</option>
                <option value="GUMUSHANE">Gümüşhane</option>
                <option value="HAKKARI">Hakkari</option>
                <option value="HATAY">Hatay</option>
                <option value="IGDIR">Iğdır</option>
                <option value="ISPARTA">Isparta</option>
                <option value="KAHRAMANMARAS">Kahramanmaraş</option>
                <option value="KARABUK">Karabük</option>
                <option value="KARAMAN">Karaman</option>
                <option value="KARS">Kars</option>
                <option value="KASTAMONU">Kastamonu</option>
                <option value="KAYSERI">Kayseri</option>
                <option value="KIRIKKALE">Kırıkkale</option>
                <option value="KIRKLARELI">Kırklareli</option>
                <option value="KIRSEHIR">Kırşehir</option>
                <option value="KILIS">Kilis</option>
                <option value="KOCAELI">Kocaeli</option>
                <option value="KONYA">Konya</option>
                <option value="KUTAHYA">Kütahya</option>
                <option value="MALATYA">Malatya</option>
                <option value="MANISA">Manisa</option>
                <option value="MARDIN">Mardin</option>
                <option value="MERSIN">Mersin</option>
                <option value="MUGLA">Muğla</option>
                <option value="MUS">Muş</option>
                <option value="NEVSEHIR">Nevşehir</option>
                <option value="NIGDE">Niğde</option>
                <option value="ORDU">Ordu</option>
                <option value="OSMANIYE">Osmaniye</option>
                <option value="RIZE">Rize</option>
                <option value="SAKARYA">Sakarya</option>
                <option value="SAMSUN">Samsun</option>
                <option value="SIIRT">Siirt</option>
                <option value="SINOP">Sinop</option>
                <option value="SIVAS">Sivas</option>
                <option value="SANLIURFA">Şanlıurfa</option>
                <option value="SIRNAK">Şırnak</option>
                <option value="TEKIRDAG">Tekirdağ</option>
                <option value="TOKAT">Tokat</option>
                <option value="TRABZON">Trabzon</option>
                <option value="TUNCELI">Tunceli</option>
                <option value="USAK">Uşak</option>
                <option value="VAN">Van</option>
                <option value="YALOVA">Yalova</option>
                <option value="YOZGAT">Yozgat</option>
                <option value="ZONGULDAK">Zonguldak</option>
                <option value="AKDENIZ">Akdeniz</option>
                <option value="MARMARA">Marmara</option>
                <option value="EGE">Ege</option>
                <option value="KARADENIZ">Karadeniz</option>
            </select>
            </form>
        </div>
        </div>
    )
};

export default Province;