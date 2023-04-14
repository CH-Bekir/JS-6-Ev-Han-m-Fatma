let Tümisler = ["(x) Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika","Cocugu okuldan al", "Çocuklara Ödevlerini yaptır", "Kocanın çayını ver", "Kocanın ayaklarını yıka", "(x) Yemegi yap", "(x) Alisverise git", ];

function isKontrol() {
  // Bitmiş işleri filtrele ve göster
  const bitenIsler = Tümisler.filter(görev => görev.startsWith("(x)"));
  console.log("Bitmiş işler:", bitenIsler);

  // Bitmemiş işleri filtrele ve göster
  const bitmemisIsler = Tümisler.filter(görev => !görev.startsWith("(x)")); //! işareti olmayanı getirtmeye yarar yani X işaretli olmayanları
  console.log("Bitmemiş işler:", bitmemisIsler);

  // Tüm işlerin tamamlanıp tamamlanmadığını kontrol et ve göster
  const tamamlandi = Tümisler.every(görev => görev.startsWith("(x)"));
  console.log("Tüm işler tamamlandı mı?:", tamamlandi ? "Evet" : "Hayır");
}

//! every-startsWith-filter  bunların kullannımını bılmıyorum. Yine chatgbt den yardım alarak yaptım.

isKontrol();
