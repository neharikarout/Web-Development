// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
    // Get the number of pixels the document is currently scrolled vertically
    var scrollTop = document.documentElement.scrollTop;
    
    // Calculate the total height of the document (including scrollable part)
    var totalHeight = document.documentElement.scrollHeight;
    
    // Calculate the height of the visible part of the document
    var viewportHeight = document.documentElement.clientHeight;
    
    // Calculate the total scrollable height
    var scrollableHeight = totalHeight - viewportHeight;
    
    // Calculate the percentage of the document that has been scrolled
    var scrolledPercentage = (scrollTop / scrollableHeight) * 100;
    
    // Set the width of the progress bar based on the scrolled percentage
    document.getElementById('progress-bar').style.width = scrolledPercentage + '%';
  });
  