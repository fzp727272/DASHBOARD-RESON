$(function() {
  var show_num = 15;
  var listnum = 18;


  for (var i = listnum - 2; i >= 0; i--) {

    var list = $(".tr-row").eq(0).clone(true);
    $(".tr-row").eq(0).after(list);
  };

  $(".dropdown").hover(function() {
    $(this).addClass('active')
  }, function() {
    $(this).removeClass('active')
  });
  $('.selectpicker').on('change.bs.select', function() {
    $(this).children("option:selected").prependTo(this);
    $(this).selectpicker('refresh');
    if ($(this).children('option:selected').length != 0) {
      $(this).parent(".btn-group").children('.btn').addClass('btn-selected')
    } else {

      $(this).parent(".btn-group").children('.btn').removeClass('btn-selected')
    }
  });



  function tablecontainer() {
    var sizeheight = $(window).height() - $("#select-group").height()  - 180;
    $("#table-container").height(sizeheight)
  }
  $(window).load(function() {
    tablecontainer()
  });
  $(window).resize(function(event) {
    tablecontainer()
  });

  var togglebutton = 1

  $(".seemore").click(function(event) {
    if (togglebutton) {
      $(".detailfilter").slideDown(300);
      $(this).html("See Less Filter <i class='fa fa-angle-double-up'></i>");
      togglebutton = 0;
      setTimeout(tablecontainer, 300)
    } else {
      $(".detailfilter").slideUp(300);
      $(this).html("See More Filter <i class='fa fa-angle-double-down'></i>");
      togglebutton = 1;
      setTimeout(tablecontainer, 300)
    }
  });


  $("a.navbar-brand").hover(function() {
    $(this).css({
      color: '#9d9d9d'
    })
    $(this).find("path").css({
      fill: '#9d9d9d'
    });
  }, function() {

    $(this).css({
      color: '#fff'
    })

    $(this).find("path").css({

      fill: '#fff'
    });
  });

  //tooltips
  $('.showdetail-tips').tooltip();
  $("#refresh").tooltip();
  //$("#expand-table").tooltip();



  function expandtable() {

    // $("#expand-table").text( 'Shrink Table');

    $("#expand-table").children('i').attr({
      class: 'fa fa-angle-double-down',

    });


    $("#select-group").slideUp(300);
    setTimeout(function() {
      var sizeheight = $(window).height() - 180;
      $("#table-container").height(sizeheight)
    }, 300)
  };


  function shrinktable() {

    // $("#expand-table").text( 'Expand Table');

    $("#expand-table").children('i').attr({
      class: 'fa fa-angle-double-up',

    });
    $("#select-group").slideDown(300);
    setTimeout(tablecontainer, 400)
  }

  /*

    $("#table-container").scroll(function() {
      //var scrollheight = $(window).height() - $("#select-group").height() - 180;
      if ($("#table-container").scrollTop() > 100) {

        if ($("#expand-table").children('i').hasClass('fa-angle-double-up')) {
          expandtable()
        }



      } else {

        if ($("#expand-table").children('i').hasClass('fa-angle-double-down')) {
          shrinktable()
        }


      }

    });

  */

  $("#expand-table").click(function(event) {
    if ($(this).children("i").hasClass('fa-angle-double-down')) {
      shrinktable()
    } else {

      expandtable()
    }
  });



  $(".chooseperson").click(function(event) {
    $(".chooseperson").removeClass('active');
    $(this).addClass('active');

  });



  //popup dialog
  $("#approve-choose").click(function() {
    $("button.confirm").css({
      'cursor': 'pointer',
      'background-color': '#3bf'
    });
    $(".afterreject").css({
      display: 'none'
    });
    swal({
      title: "Are you sure to approve this page",
      allowOutsideClick: true,
      showCancelButton: true,
      closeOnConfirm: true,
      animation: "slide-from-top",

    }, function(isConfirm) {
      if (isConfirm) {
        /*
                //showapprove
                $(".afterreject").css({
                  display: 'none'
                });
                $(".approve").hide(300);
                $(".regect").hide(300);
                $("#reviewinfo").show(300);
                $(".afterapprove").slideDown(400);*/


        //endapprove
      }
    });
  });


  $("#reject-choose").click(function() {



    swal({
      title: "Reject the page and choose a reason below",
      text: ' <a class="chooseperson">Payment Fraud</a><a class="chooseperson">ATO Payment Fraud</a><a class="chooseperson">Credit Card Fraud</a><a class="chooseperson">This is rejected</a><a class="chooseperson">EADP Test</a>',
      html: true,
      allowOutsideClick: true,
      showCancelButton: true,
      showConfirmButton: true,
      closeOnConfirm: true,
      animation: "slide-from-top",

    });

    $("button.confirm").css({
      'cursor': 'not-allowed',
      'background-color': '#dcdcdc'
    });
    $(".chooseperson").click(function(event) {

      var ele = $(this).html();
      $(".chooseperson").removeClass('active');
      $(this).addClass('active');

      $("button.confirm").css({
        'cursor': 'pointer',
        'background-color': '#3bf'
      });


      //show reject

    });
  });



  $("#assign-select").click(function() {



    swal({
      title: "Choose a person to assign",
      text: '<select class="selectpicker form-control " id="choosepersonselect" data-live-search="true" data-size="5"   multiple data-max-options="1"><option value="kbrading@ea.com">Brading, Kerry</option><option value="fyang@ea.com">Yang, Frank</option><option value="vliang@ea.com">Liang, Viola</option><option value="shaunmccarthy@ea.com">McCarthy, Shaun</option><option value="msederquist@ea.com">Sederquist, Marco</option><option value="arobertson@ea.com">Robertson, Alex</option><option value="adoroftei@ea.com">Doroftei, Alexandru</option><option value="mcourtot@ea.com">Courtot, Maxime</option><option value="riskintoperator01@ea.com">riskint, operator01</option><option value="mpodvrsnik@ea.com">Podvrsnik, Matej</option><option value="lilianli@ea.com">Li, Lan (Lilian)</option><option value="riskintmanager01@ea.com">riskint, manager01</option><option value="shchen@ea.com">Chen, Shuang</option><option value="vchen@ea.com">Chen, Victor</option><option value="sviidu@ea.com">Viidu, Siim</option><option value="peteryu@ea.com">Yu, Jun (Peter) - Commerce</option><option value="bmedler@ea.com">Medler, Ben</option><option value="ericchen@ea.com">Chen, ZhiFeng (Eric)</option><option value="mmao@ea.com">Mao, Mia</option><option value="pgouskova@ea.com">Gouskova, Polina</option><option value="riskintoperator02@ea.com">riskint, operator02</option><option value="tiffanylin@ea.com">Lin, Chen (Tiffany)</option><option value="riskintadmin02@ea.com">riskint, admin02</option><option value="hunterchen@ea.com">Chen, Haidong (Hunter)</option><option value="scropera@ea.com">Cropera, Sharon</option><option value="riskintmanager02@ea.com">riskint, manager02</option><option value="riskintadmin01@ea.com">riskint, admin01</option><option value="awachtel@ea.com">Wachtel, Aleina</option><option value="yingwang@ea.com">Wang, Ying</option><option value="zhfu@contractor.ea.com">Fu, Zhengpeng - Contractor</option><option value="ffyang@ea.com">Yang, Feifeng</option><option value="sonhu@ea.com">Hu, Song</option><option value="stefanyang@ea.com">Yang, Stefan</option> </select>',
      html: true,
      allowOutsideClick: true,
      showCancelButton: true,
      showConfirmButton: true,
      closeOnConfirm: true,
      animation: "slide-from-top",

    });

    $('#choosepersonselect').selectpicker('render');

    $(".sweet-alert , .showSweetAlert").find("input.form-control").css({
      display: 'block'
    });

    $(".sweet-alert ").find(".dropdown-toggle").addClass('btninsweetalert')

    $("button.confirm").css({
      'cursor': 'not-allowed',
      'background-color': '#dcdcdc'
    });


    $(".sweet-alert , .showSweetAlert").css({
      'overflow': 'initial'
    })
    $('#choosepersonselect').on('changed.bs.select', function(e) {
      $("button.confirm").css({
        'cursor': 'pointer',
        'background-color': '#3bf'
      });

    });
  });


/*
  $("#selectfilter").click(function(event) {

    swal({
      title: "Select A Filter",
      text: ' <a class="chooseperson">Marvin</a><a class="chooseperson">Create New</a><a class="chooseperson">532c9504f25440</a><a class="chooseperson">Test</a><a class="chooseperson">cxzcz</a>',
      html: true,
      allowOutsideClick: true,
      showCancelButton: true,
      showConfirmButton: true,
      closeOnConfirm: true,
      animation: "slide-from-top",

    });

    $("button.confirm").css({
      'cursor': 'not-allowed',
      'background-color': '#dcdcdc'
    });
    $(".chooseperson").click(function(event) {

      var ele = $(this).html();
      $(".chooseperson").removeClass('active');
      $(this).addClass('active');

      $("button.confirm").css({
        'cursor': 'pointer',
        'background-color': '#3bf'
      });


      //show reject

    });



  });*/

  $("#savefilter").click(function(event) {
    swal({
      title: "Write A Filter Name",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: true,
      animation: "slide-from-top",
      inputPlaceholder: "Write something"
    }, function(inputValue) {
      if (inputValue === false) return false;
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
    
    });
  });



  $("tbody").children("tr").click(function(event) {
    if ($(this).hasClass('info')) {
      $(this).removeClass('info');

      $(this).children('td').eq(0).children('input').prop('checked', false);
      if ($("tr.info").length == 0) {
        $("#operation-btn").children('.btn').addClass('disabled');
      }

    } else {
      $(this).addClass('info');
      $(this).children('td').eq(0).children('input').prop('checked', true);
      $("#operation-btn").children('.btn').removeClass('disabled');

    }


  });

  var togglecheckbox = 0;

  $("input[name='check_all']").click(function(event) {


    if (togglecheckbox) {
      $('.alert,.alert-info').hide(100);

      $("input[type='checkbox']").prop('checked', false);
      $("tbody").children("tr").removeClass('info');
      $("#operation-btn").children('.btn').addClass('disabled');


      togglecheckbox = 0;
    } else {

      $('.alert,.alert-info').show(100);

      $("input[type='checkbox']").prop('checked', true);
      $("tbody").children("tr").addClass('info');
      $("#operation-btn").children('.btn').removeClass('disabled');

      togglecheckbox = 1
    }

  });


  $("#selectfilter").children('ul').find('a').click(function(event) {

    var ele = $(this).html()+'   <span class="caret" style="float: right; margin-top: 8px;"></span>'
$("#selectfilter").children('a').eq(0).html(ele)

  });

})