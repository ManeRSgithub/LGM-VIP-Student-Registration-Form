$(document).ready(function() {
    $("#registerForm").submit(function(e) {
      e.preventDefault();
      let name = $("[name=name]").val();
      let phone = $("[name=phone]").val();
      let address = $("[name=address]").val();
      let branch = $("[name=branch]").val();
      let bloodGroup = $("[name=bloodGroup]").val();
      let year = $("[name=year]").val();
      $("#studentSummary")
        .find("#name")
        .text(name);
      $("#studentSummary")
        .find("#phone")
        .text(phone);
      $("#studentSummary")
        .find("#address")
        .text(address);
      $("#studentSummary")
        .find("#branch")
        .text(branch);
      $("#studentSummary")
        .find("#bloodGroup")
        .text(bloodGroup);
      $("#studentSummary")
        .find("#year")
        .text(year);
    });
  });