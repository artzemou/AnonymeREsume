$("#about_myself i").remove();

_this = document.createElement('article');

_this.setAttribute("id", "pattern");

wrap.append(_this);

$('#pattern').append('<div class="cube">'
                    +'<span class="cube_el front front2 front4">'
                        +'<span class="cube_el left8">'
                          +'  <span class="cube_el back-languet back-languet4">'
                              +'  <span class="cube_el back-languet-cache-rigth"></span>'
                              +'  <span class="cube_el back-languet-cache-left"></span>'
                              +'  <span class="cube_el back-languet-cache-top"></span>'
                          +'  </span>'
                          +'  <span class="cube_el left-languet">'
                          +'      <span class="cube_el left-languet-cache-rigth"></span>'
                          +'    <span class="cube_el left-languet-cache-left"></span>'
                          +'      <span class="cube_el left-languet-cache-top"></span>'
                            +'</span>'
                            +'<span class="cube_el rigth-languet-cube2 rigth-languet-cube8">'
                                +'<span class="cube_el rigth-languet-cache-rigth"></span>'
                                +'<span class="cube_el rigth-languet-cache-left"></span>'
                                +'<span class="cube_el rigth-languet-cache-top"></span>'
                            +'</span>'
                        +'</span>'
                    +'</span>'
                    +'<span class="cube_el back cube_el">'
                        +'<span class="cube_el rigth-languet rigth-languet4">'
                            +'<span class="cube_el rigth-languet-cache-rigth"></span>'
                            +'<span class="cube_el rigth-languet-cache-left"></span>'
                            +'<span class="cube_el rigth-languet-cache-top"></span>'
                        +'</span>'
                        +'<span class="cube_el right2 right8">'
                            +'<span class="cube_el back-right-languet back-right-languet4 back-right-languet8">'
                                +'<span class="cube_el back-right-languet-cache-rigth"></span>'
                                +'<span class="cube_el back-right-languet-cache-left"></span>'
                                +'<span class="cube_el back-right-languet-cache-top"></span>'
                            +'</span>'
                            +'<span class="cube_el rigth-languet-cube2 rigth-languet-cube8">'
                                +'<span class="cube_el rigth-languet-cache-rigth"></span>'
                                +'<span class="cube_el rigth-languet-cache-left"></span>'
                                +'<span class="cube_el rigth-languet-cache-top"></span>'
                            +'</span>'
                            +'<span class="cube_el top top5 top8">'
                                +'<span class="cube_el back-right-languet back-right-languet4 back-right-languet8">'
                                  +'  <span class="cube_el back-right-languet-cache-rigth"></span>'
                                  +'  <span class="cube_el back-right-languet-cache-left"></span>'
                                  +'  <span class="cube_el back-right-languet-cache-top"></span>'
                                +'</span>'
                            +'</span>'
                        +'</span>'
                    +'</span>'
                    +'<span class="cube_el bottom"></span>'
                +'</div>');


$('head').append('<link rel="stylesheet" href="css/cube.min.css">')
