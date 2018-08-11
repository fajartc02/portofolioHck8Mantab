function showExteriorFortuner() {
    $('#showFortunerFeature').html(``)
    $('#showInnovaFeature').html(``)
    $('#showFortunerFeature').append(`
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/Banner-Exterior1.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/1-New-TRD-grill-and-Front-Bumper-Design.jpg" class="img-fluid w-100">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/2-New-TRD-sprtivo-Stiker.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/3-New-TRD-rear-bumper-design.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/4-New-TRD-black-Fog-Lamp.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/5-Auto-Folding-mirror.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/6-TRD-alloy-Wheel.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/7_automatic.jpg" class="img-fluid w-100" alt="Responsive image">
      `)
  }

  function showInteriorFortuner() {
    $('#showFortunerFeature').html(``)
    $('#showInnovaFeature').html(``)
    $('#showFortunerFeature').append(`
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/Banner-Interior3.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/1_Steering-Wheel.jpg" class="img-fluid w-100">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/2_Spacious-7-Seater-with-comfortable-seat-design.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/Cabin-Lamp.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/4-6-Speed-AT-Sport.jpg" class="img-fluid w-100" alt="Responsive image">
      `)
  }

  function showInteriorInnova() {
    $('#showInnovaFeature').html(``)
    $('#showFortunerFeature').html(``)
    $('#showInnovaFeature').html(`
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-interior_01.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-interior_02.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-interior_03.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-interior_04.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-interior_05.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-interior_06.jpg" class="img-fluid w-100" alt="Responsive image">        
      `)
  }

  function showExteriorInnova() {
    $('#showInnovaFeature').html(``)
    $('#showFortunerFeature').html(``)
    $('#showInnovaFeature').html(`
        <img style="background-size: cover" src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-exterior_01.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-exterior_02.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-exterior_03.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-exterior_04.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-exterior_05.jpg" class="img-fluid w-100" alt="Responsive image">
        <img src="http://www.toyota.astra.co.id/elements/images/uploads/1/inova-exterior_06.jpg" class="img-fluid w-100" alt="Responsive image">        
      `)
  }

  $('.carousel').carousel('cycle', {
    interval: 1000
  })