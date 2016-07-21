var OK_LANG = 'Tamam';
var CANCEL_LANG = 'İptal';
var RESET_LANG = 'Yenile';
var ABOUT_LANG = 'Hakkında';
var ZOOM_LANG = 'Boyut';
var BUTTON_TIME_LIST = 'ZAMAN<br>LİSTESİ';
var BUTTON_OPTIONS = 'AYARLAR';
var BUTTON_EXPORT = 'İNDİR';
var BUTTON_BLOG = 'BLOG';
var PROPERTY_USEINS = 'WCA inceleme süresini kullan';
var PROPERTY_VOICEINS = 'WCA inceleme süresinde sesli uyarı: ';
var PROPERTY_VOICEINS_STR = 'yok|erkek sesi|kadın sesi';
var PROPERTY_USECFM = 'zaman onayı(ok/+2/dnf)';
var PROPERTY_PHASES = 'aşamalar: ';
var PROPERTY_TIMERSIZE = 'zamanlayıcı boyutu: ';
var CFMDIV_CURTIME = 'zaman: ';
var PROPERTY_USEMILLI = 'milisaniyeleri kullan';
var PROPERTY_SMALLADP = 'ondalık sayılar için küçük yazı kullan';
var PROPERTY_SCRSIZE = 'karıştırma boyutu: ';
var PROPERTY_SCRMONO = 'boşluklu scramble';
var PROPERTY_SCRLIM = 'Karıştırma alanının yüksekliğini sınırla';
var PROPERTY_SCRALIGN = 'Karıştırma alanının hizası: ';
var PROPERTY_SCRALIGN_STR = 'merkez|sol|sağ';
var EXPORT_DATAEXPORT = 'Veri Girişi/Çıkışı';
var EXPORT_TOFILE = 'Dosyaya aktar';
var EXPORT_FROMFILE = 'Dosyadan yükle';
var EXPORT_TOSERV = 'Sunucuya aktar';
var EXPORT_FROMSERV = 'Sunucudan yükle';
var EXPORT_USERID = 'Lütfen hesabınızı girin (sadece harf veya rakam): ';
var EXPORT_INVID = 'Sadece harf veya rakam girebilirsiniz!';
var EXPORT_ERROR = 'Bazı hatalar meydana geldi...';
var EXPORT_NODATA = 'Hesabınız için veri bulunamadı';
var EXPORT_UPLOADED = 'Yükleme başarılı';
var BUTTON_SCRAMBLE = 'KARIŞ-<br>TIRMA';
var BUTTON_TOOLS = 'ARAÇLAR';
var CROSS_UNAVAILABLE = 'Bu karıştırma türü için mevcut değil';
var EOLINE_UNAVAILABLE = 'Bu karıştırma türü için mevcut değil';
var IMAGE_UNAVAILABLE = 'Bu karıştırma türü için mevcut değil';
var TOOLS_SELECTFUNC = 'Fonksiyon: ';
var TOOLS_CROSS = 'artıyı çöz';
var TOOLS_EOLINE = 'EOLine'ı çöz';
var TOOLS_IMAGE = 'karıştırmayı göster';
var TOOLS_STATS = 'İstatistikler';
var TOOLS_DISTRIBUTION = 'süre dağılımı';
var TOOLS_TREND = 'süre grafiği';
var PROPERTY_IMGSIZE = 'Karıştırma Görüntüsü Boyutu: ';
var TIMER_INSPECT = 'inceleme';
var TIMER_SOLVE = 'çözüm';
var PROPERTY_USEMOUSE = 'mouse zamanlayıcısı kullan';
var PROPERTY_TIMEU = 'zamanlayıcı güncelleştirmesi: ';
var PROPERTY_TIMEU_STR = 'güncelleştirme|0.1s|saniye|inceleme|yok';
var PROPERTY_PRETIME = 'boşluk tuşunu basılı tutma süresi(saniye(ler)): ';
var PROPERTY_ENTERING = 'zamanı şununla gir: ';
var PROPERTY_ENTERING_STR = 'zamanlayıcı|yazarak|stackmat|sanal';
var PROPERTY_COLOR = 'renk temasını seç: ';
var PROPERTY_COLORS = 'yazı rengi: |arkaplan rengi: |ekran rengi: |buton rengi: |link rengi: |Logo rengi: |Logo arkaplan rengi: ';
var PROPERTY_VIEW = 'ekran stili:';
var PROPERTY_VIEW_STR = 'Otomatik|Mobil|Blgisayar';
var COLOR_EXPORT = 'Lütfen yüklemede diziyi koru: ';
var COLOR_IMPORT = 'Lütfen aktarılan diziyi koru: ';
var COLOR_FAIL = 'Yanlış Veri, Yükleme Başarısız';
var PROPERTY_FONTCOLOR_STR = 'siyah|beyaz';
var PROPERTY_COLOR_STR = 'rastgele|stil1|stil2|stil3|siyah|beyaz|stil6|manuel|aktar...|yükle...';
var PROPERTY_FONT = 'zamanlayıcı\'nın yazı tipini seç: ';
var PROPERTY_FONT_STR = 'rastgele dijital|normal|dijital1|dijital2|dijital3|dijital4|dijital5';
var PROPERTY_FORMAT = 'zaman formatı: '
var PROPERTY_USEKSC = 'klavye kısayollarını kullan';
var PROPERTY_NTOOLS = 'araç sayısı';
var PROPERTY_AHIDE = 'Zamanlayıcı Çalışırken Tüm Yazıları Sakla';
var SCRAMBLE_LAST = 'son';
var SCRAMBLE_NEXT = 'sonraki';
var SCRAMBLE_SCRAMBLE = ' karıştırma';
var SCRAMBLE_LENGTH = 'uzunluk';
var SCRAMBLE_INPUT = 'Karıştırma(lar)ı Sakla';
var scrdata = [
	['WCA', [
		['3x3x3', "333", 0],
		['4x4x4', "444wca", -40],
		['5x5x5', "555wca", -60],
		['2x2x2', "222so", 0],
		['3x3 bld', "333ni", 0],
		['3x3 oh', "333oh", 0],
		['3x3 fm', "333fm", 0],
		['3x3 ft', "333ft", 0],
		['megaminx', "mgmp", -70],
		['pyraminx', "pyrso", -10],
		['sq1', "sqrs", 0],
		['clock', "clko", 0],
		['skewb', "skbso", 0],
		['6x6x6', "666wca", -80],
		['7x7x7', "777wca", -100],
		['4x4 bld', "444bld", -40],
		['5x5 bld', "555bld", -60],
		['3x3 mbld', "r3", 5]
	]],
	['Veri Gir', [
		['外部', "Gir", 0]
	]],
	['===WCA===', [
		['--', "blank", 0]
	]],
	['2x2x2', [
		["WCA", "222so", 0],
		['en uygun ters karıştırma', "222o", 0],
		['3-gen', "2223", 25],
		['EG', "222eg", 0],
		['EG0', "222eg0", 0],
		['EG1', "222eg1", 0],
		['EG2', "222eg2", 0]
	]],
	['3x3x3', [
		["WCA", "333", 0],
		['eski tip', "333o", 25],
		['acemiler için 3x3x3', "333noob", 25],
		['sadece kenarlar', "edges", 0],
		['sadece köşeler', "corners", 0],
		['son katman', "ll", 0],
		['zbll', "zbll", 0],
		['son katmanın köşeleri', "cll", 0],
		['son katmanın kenarları', "ell", 0],
		['son altı kenar', "lse", 0],
		['son altı kenar&ltM,U&gt', "lsemu", 0],
		['Roux L10P', "cmll", 0],
		['artı çözülü', "f2l", 0],
		['son çift + son katman', "lsll2", 0],
		['2GLL', "2gll", 0],
		['ZBLS', "zbls", 0],
		['ZZLL', "zzll", 0],
		['PLL', "pll", 0],
		['EOLine', "eoline", 0],
		['kolay artı', 'easyc', 3]
	]],
	['4x4x4', [
		["WCA", "444wca", 40],
		['SiGN', "444", 40],
		['ters karıştırma', "444o", 0],
		['YJ', "444yj", 40],
		['4x4x4 kenarlar', "4edge", 8],
		['R,r,U,u', "RrUu", 40]
	]],
	['5x5x5', [
		["WCA", "555wca", 60],
		['SiGN', "555", 60],
		['5x5x5 kenarlar', "5edge", 8]
	]],
	['6x6x6', [
		["WCA", "666wca", 80],
		['SiGN', "666si", 80],
		['prefix', "666p", 80],
		['suffix', "666s", 80],
		['6x6x6 kenarlar', "6edge", 8]
	]],
	['7x7x7', [
		["WCA", "777wca", 100],
		['SiGN', "777si", 100],
		['prefix', "777p", 100],
		['suffix', "777s", 100],
		['7x7x7 kenarlar', "7edge", 8]
	]],
	['Clock', [
		['jaap', "clk", 0],
		['wca', "clkwca", 0],
		['kısa', "clkc", 0],
		['verimli pin düzeni', "clke", 0]
	]],
	['Megaminx', [
		["WCA", "mgmp", 70],
		['Havuç', "mgmc", 70],
		['eski tip', "mgmo", 70]
	]],
	['Pyraminx', [
		["WCA", "pyrso", 10],
		['en uygun ters karıştırma', "pyro", 0],
		['rastgele hareketler', "pyrm", 25]
	]],
	['Square-1', [
		["WCA", "sqrs", 0],
		['face turn metric', "sq1h", 40],
		['twist metric', "sq1t", 20]
	]],
	['Skewb', [
		["WCA", "skbso", 0],
		['U L R B', "skb", 25]
	]],
	['===DİĞER===', [
		['--', "blank", 0]
	]],
	['15 puzzle', [
		['parça hareketleri', "15p", 80],
		['boşluk hareketleri', "15pm", 80]
	]],
	['LxMxN', [
		['1x3x3 (Floppy Cube)', "133", 0],
		['2x2x3 (Tower Cube)', "223", 0],
		['2x3x3 (Domino)', "233", 25],
		['3x3x4', "334", 40],
		['3x3x5', "335", 25],
		['3x3x6', "336", 40],
		['3x3x7', "337", 40],
		['8x8x8', "888", 120],
		['9x9x9', "999", 120],
		['10x10x10', "101010", 120],
		['11x11x11', "111111", 120]
	]],
	['Gear Cube', [
		['ters karıştırma', "gearso", 0],
		['en uygun ters karıştırma', "gearo", 0],
		['3-gen', "gear", 10]
	]],
	['Cmetrick', [
		[' ', "cm3", 25]
	]],
	['Cmetrick Mini', [
		[' ', "cm2", 25]
	]],
	['Gigaminx', [
		['Pochmann', "giga", 300]
	]],
	['Helicopter Cube', [
		[' ', "heli", 40]
	]],
	['Pyraminx Crystal', [
		['Pochmann', "prcp", 70],
		['eski tip', "prco", 70]
	]],
	['Siamese Cube', [
		['1x1x3 blok', "sia113", 25],
		['1x2x3 blok', "sia123", 25],
		['2x2x2 blok', "sia222", 25]
	]],
	['Square-2', [
		[' ', "sq2", 20]
	]],
	['Super Floppy', [
		[' ', "sfl", 25]
	]],
	['Super Square-1', [
		['twist metric', "ssq1t", 20]
	]],
	['UFO', [
		['Jaap tipi', "ufo", 25]
	]],
	['Diğer', [
		['FTO (Face-Turning Octahedron)', "fto", 25]
	]],
	['===ÖZEL===', [
		['--', "blank", 0]
	]],
	['3x3x3 alt stiller', [
		['sadece R,U', "2gen", 25],
		['sadece L,U', "2genl", 25],
		['roux için sadece M,U', "roux", 25],
		['sadece F,R,U', "3gen_F", 25],
		['sadece R,U,L', "3gen_L", 25],
		['sadece R,r,U', "RrU", 25],
		['sadece yarım dönüşler', "half", 25],
		['son çift + son katman (eski)', "lsll", 15]
	]],
	['Bandaged Cube', [
		['Bicube', "bic", 30],
		['Square-1 /,(1,0)', "bsq", 25]
	]],
	['Megaminx alt stiller', [
		['2-generator R,U', "minx2g", 30],
		['last slot + last layer', "mlsll", 20]
	]],
	['Diziler', [
		['lots of 3x3x3s', "r3", 5],
		['234 relay', "r234", 0],
		['2345 relay', "r2345", 0],
		['23456 relay', "r23456", 0],
		['234567 relay', "r234567", 0]
	]],
	['===ŞAKALAR===', [
		['--', "blank", 0]
	]],
	['1x1x1', [
		['x y z', "111", 25]
	]],
	['-1x-1x-1', [
		[' ', "-1", 25]
	]],
	['1x1x2', [
		[' ', "112", 25]
	]],
	['LOL', [
		[' ', "lol", 25]
	]],
	['Derrick Eide', [
		[' ', "eide", 25]
	]]
];
var SCRAMBLE_NOOBST = [
	['üst yüzü', 'alt yüzü'],
	['sağ yüzü', 'sol yüzü'],
	['ön yüzü', 'arka yüzü']
];
var SCRAMBLE_NOOBSS = ' saat yönünde 90 derece çevir,| saat yönünün tersinde 90 derece çevir,| 180 derece çevir,';
var STATS_CFM_RESET = 'bu bölümdeki tüm süreler sıfırlansın mı?';
var STATS_CFM_DELSS = 'bu bölüm silinsin mi?';
var STATS_CFM_DELMUL = 'Geçerli İndeksten Silinmiş Değerlerin Sayısı?';
var STATS_CFM_DELETE = 'bu süre silinsin mi?';
var STATS_COMMENT = 'Yorum:';
var STATS_CURROUND = 'Geçerli Raund İstatistikleri';
var STATS_CURSESSION = 'Geçerli Bölüm İstatistikleri';
var STATS_AVG = 'ortalama';
var STATS_SOLVE = 'çözüm';
var STATS_TIME = 'süre';
var STATS_SESSION = 'Bölüm';
var STATS_SESSION_NAME = 'Bölüm Adı';
var STATS_STRING = 'en iyi|geçerli|en kötü|csTimer Tarafından %Y-%M-%D Tarihinde Oluşturuldu|çözümler/toplam: %d|single|mean of %mk|avg of %mk|Ortalama: %v{ (σ = %sgm)}|Orta: %v|Time List:';
var STATS_PREC = 'zaman dağılım aralığı: ';
var STATS_PREC_STR = 'otomatik|0.1s|0.2s|0.5s|1s|2s|5s|10s|20s|50s|100s';
var STATS_TYPELEN = '%d tip listele: |%d uzunluk listele|ortalama(average)|orta(mean)';
var PROPERTY_PRINTSCR = 'istatistiklerde karıştırma(lar)ı göster';
var PROPERTY_SUMMARY = 'süre listesinden önce özeti göster';
var PROPERTY_IMRENAME = 'yeni bölüm oluşturduktan sonra hemen yeniden adlandır';
var PROPERTY_SCR2SS = 'karıştırma tipini değiştirince yeni bölüm aç';
var PROPERTY_SS2SCR = 'bölüm değiştirince karıştırma tipini yenile';
var PROPERTY_DELMUL = 'Çoklu Silmeyi Etknleştir';
var MODULE_NAMES = {
	"ui": 'ekran',
	"color": 'renk',
	"timer": 'zamanlayıcı',
	"kernel": 'global',
	"scramble": 'karıştırma',
	"stats": 'istatistikler',
	"tools": 'araçlar'
};
var BGIMAGE_URL = 'lütfen imajın url\'sini girin';
var BGIMAGE_INVALID = 'geçersiz url';
var BGIMAGE_OPACITY = 'arkaplan imajı matlığı: ';
var BGIMAGE_IMAGE = 'arkaplan imajı: ';
var BGIMAGE_IMAGE_STR = 'yok|manuel|CCT';
var SHOW_AVG_LABEL = 'Avg Etiketini Göster';
var TOOLS_SCRGEN = 'KarıştırmaOluşturucu';
var SCRGEN_NSCR = 'Karıştırma sayısı: ';
var SCRGEN_PRE = 'önek: ';
var SCRGEN_GEN = 'Karıştırmaları Oluştur!';
