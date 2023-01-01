import React from "react";

function useListeCek(link) {
  // reactın neredeyse tüm özelliklerini kullanabiliyoruz, klasik fonkaiyonlardan farklı olarak..
  const [veri, veriGuncelle] = React.useState(null);

  React.useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => veriGuncelle(data));
  }, [link]);

  return [veri, veriGuncelle];
}

export default useListeCek;
