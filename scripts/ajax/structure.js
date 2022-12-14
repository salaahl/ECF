$(document).ready(function () {
  var pageS = "ok";
  var searchParams = new URLSearchParams(window.location.search);
  var mail = searchParams.get("mail_s");
  var mailP = searchParams.get("mail_p");

  $.ajax({
    type: "POST",
    url: "../index.php",
    data: { page_structure: pageS, mail: mail },
    dataType: "JSON",
    success: function (data) {
       $("#delete_structure").val(mail);
      $("h1").append(data.nom_partenaire);
      $("#mail_structure").append(mail);
      $("#adresse_structure").append(data.adresse);
      $("#statut_structure").prop("checked", data.statut);
      $("#perm_boissons").prop("checked", data.perm_boissons);
      $("#perm_newsletter").prop("checked", data.perm_newsletter);
      $("#perm_planning").prop("checked", data.perm_planning);
      $("#retour_page_partenaire").attr(
        "href",
        "../front-end/partenaire.php?mail_p=" + data.mail_partenaire
      );
    },
    error: function () {
      alert("Erreur");
    },
  });
});
