(function enableSelects() {
  console.log("Enabling disabled selects XXXXXXX");

  const tryEnable = () => {
    let foundElements = false;

    // Enable statut_mandat_pfo select
    const statutSelect = document.getElementById("statut_mandat_pfo");
    if (statutSelect) {
      foundElements = true;
      statutSelect.removeAttribute("disabled");
      const statutObserver = new MutationObserver((muts) => {
        muts.forEach((m) => {
          if (
            m.attributeName === "disabled" &&
            statutSelect.hasAttribute("disabled")
          ) {
            statutSelect.removeAttribute("disabled");
          }
        });
      });
      statutObserver.observe(statutSelect, { attributes: true });
    }

    // Enable mandat_motifs_ko[] select
    const motifSelect = document.querySelector(
      'select[name="mandat_motifs_ko[]"]'
    );
    if (motifSelect) {
      foundElements = true;
      motifSelect.removeAttribute("disabled");
      const motifObserver = new MutationObserver((muts) => {
        muts.forEach((m) => {
          if (
            m.attributeName === "disabled" &&
            motifSelect.hasAttribute("disabled")
          ) {
            motifSelect.removeAttribute("disabled");
          }
        });
      });
      motifObserver.observe(motifSelect, { attributes: true });
    }

    // If neither element was found, retry a few times
    if (!foundElements) {
      if (retryCount++ < 10) setTimeout(tryEnable, 300);
    }
  };

  let retryCount = 0;
  tryEnable();
})();
