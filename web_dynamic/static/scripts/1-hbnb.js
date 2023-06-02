$(document).ready(function() {
  // Store the checked amenity IDs
  const checkedAmenities = [];

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    // Check if the checkbox is checked or unchecked
    if ($(this).prop('checked')) {
      // Store the Amenity ID in the variable if checked
      checkedAmenities.push(amenityId);
    } else {
      // Remove the Amenity ID from the variable if unchecked
      const index = checkedAmenities.indexOf(amenityId);
      if (index !== -1) {
        checkedAmenities.splice(index, 1);
      }
    }

    // Update the h4 tag inside the div Amenities with the list of checked Amenities
    $('div.Amenities h4').text(checkedAmenities.join(', '));
  });
});
