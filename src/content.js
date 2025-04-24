(function enableStatutMandatPfo() {
  const tryEnable = () => {
    const select = document.getElementById("statut_mandat_pfo");
    if (select) {
      select.removeAttribute("disabled");
      const observer = new MutationObserver((muts) => {
        muts.forEach((m) => {
          if (m.attributeName === "disabled" && select.hasAttribute("disabled")) {
            select.removeAttribute("disabled");
          }
        });
      });
      observer.observe(select, { attributes: true });
    } else {
      if (retryCount++ < 10) setTimeout(tryEnable, 300);
    }
  };
  let retryCount = 0;
  tryEnable();
})();