$(function(){

  $('#outputbox').hide();

  $('#modalCloseButton').click(function(){
    $('#outputbox').hide();
  });


  var locations = [
    { value: 'Athens, GA', data: '1199 Prince Ave, Athens, GA 30606', phone: '(123) 456-0098' },
    { value: 'Baltimore, MD', data: '2400 E Fort Ave, Baltimore, MD 21230', phone: '(193) 356-9098' },
    { value: 'Cleveland, OH', data: '1751 East 23rd Street, Cleveland, OH 44114', phone: '(123) 676-0078'  },
    { value: 'Detroit, MI', data: '42 W Warren Ave, Detroit, MI 48202', phone: '(123) 496-1232'  },
    { value: 'Eden, NC', data: '656 Washington St, Eden, NC 27288', phone: '(154) 447-7654'  },
    { value: 'Fairfield, CA', data: '1350 Travis Blvd, Fairfield, CA 94533', phone: '(453) 476-9871'  },
    { value: 'Gaffney, SC', data: '1115 College Dr, Gaffney, SC 29340', phone: '(765) 886-0095'  },
    { value: 'Haledon, NJ', data: '529 Belmont Ave, Haledon, NJ 07508', phone: '(554) 466-9873'  },
    { value: 'Ilion, NY', data: '99 Sixth Avenue, Ilion, NY 13357', phone: '(123) 486-6548'  },
    { value: 'Jackson, TN', data: '1050 Union University Dr, Jackson, TN 38305', phone: '(765) 326-7650'  },
    { value: 'Kansas City, KS', data: '7250 State Avenue, Kansas City, KS 66112', phone: '(332) 432-6750'  },
    { value: 'La Homa, TX', data: '3901 N La Homa Rd, Palmview, TX 78574', phone: '(444) 329-0874'  },
    { value: 'Madison, WI', data: '4000 International Ln, Madison, WI 53704', phone: '(654) 442-0843'  },
    { value: 'Naples, FL', data: '160 Aviation Dr N, Naples, FL 34104', phone: '(176) 436-9865'  },
    { value: 'Oak Hill, WV', data: '340 W Oyler Ave, Oak Hill, WV 25901', phone: '(333) 654-8976'  },
    { value: 'Palatine, IL', data: '1000 S Quentin Rd, Palatine, IL 60067', phone: '(130) 447-1093'  },
    { value: 'Quincy, MA', data: '141 Franklin St, Quincy, MA 02169', phone: '(988) 776-1267'  },
    { value: 'Rainbow City, AL', data: '4412 Rainbow Dr, Rainbow City, AL 35906', phone: '(432) 543-0000'  },
    { value: 'Safford, AZ', data: '1391 W Thatcher Blvd, Safford, AZ 85546', phone: '(165) 121-0890'  },
    { value: 'Tahlequah, OK', data: '2142 Mahaney Ave, Tahlequah, OK 74464', phone: '(873) 671-0632'  },
    { value: 'Uniontown, PA', data: '500 W Berkeley St, Uniontown, PA 15401', phone: '(659) 329-9921'  },
    { value: 'Vermillion, SD', data: '414 E Clark St, Vermillion, SD 57069', phone: '(398) 549-7692'  },
    { value: 'Waco, TX', data: '300 S 5th St, Waco, TX 76701', phone: '(860) 777-0093'  },
    { value: 'Xenia, OH', data: '300 Xenia Towne Square, Xenia, OH 45385', phone: '(767) 668-1086'  },
    { value: 'York, ME', data: '2 Brickyard Ln, York, ME 03909', phone: '(654) 433-3321'  },
    { value: 'Zuni Pueblo, NM', data: '1231-1245 NM-53, Zuni, NM 87327', phone: '(769) 543-5897'  },
    ];
  
  // setup autocomplete function pulling from locations JSON
  $('#autocomplete').autocomplete({
    lookup: locations,
    onSelect: function (suggestion) {
      var address = '<strong>Address: </strong>' + suggestion.data;
      var phone = '<strong>Phone Number: </strong>' + suggestion.phone;
      var locationCity = suggestion.value;
      $('#outputbox').show();
      $('#outputAddress').html(address);
      $('#outputPhone').html(phone);
      $('#outputCity').html(locationCity);


      //add Google Map for the chosen location
      switch(suggestion.value){
        case "Athens, GA":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26478.51804758615!2d-83.38998320478554!3d33.945892284796784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d38b144a4c7%3A0x1e85ee1f3ca9b46a!2sPiedmont+Athens+Regional+Medical+Center!5e0!3m2!1sen!2sus!4v1520528574724");
        break;
        case"Baltimore, MD":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49410.5151500072!2d-76.65550710370545!3d39.28468541977818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80398209f6ccf%3A0xea4d214834781212!2sFort+McHenry+National+Monument+and+Historic+Shrine!5e0!3m2!1sen!2sus!4v1520531572710");
        break;
        case "Cleveland, OH":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.9522815606388!2d-81.67601968466926!3d41.50530887925359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fa63cd5f8be1%3A0xe982a9d3528dd68!2sCleveland+State+University!5e0!3m2!1sen!2sus!4v1520528348263");
          break;
        case "Detroit, MI":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94352.83567446002!2d-83.16925133334682!3d42.35262574124278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2bc9d42d843%3A0xb688968949df5e4e!2sWayne+State+University!5e0!3m2!1sen!2sus!4v1520529299750");
        break;
        case"Eden, NC":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25658.50923351544!2d-79.76739654889882!3d36.49829007990129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8852eaeaef44983d%3A0x95ee1a63f2dcef70!2sEden+Historical+Museum!5e0!3m2!1sen!2sus!4v1520529426014");
        break;
        case "Fairfield, CA":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25057.613455611016!2d-122.0565375355683!3d38.27481744441486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80851426cf2065bb%3A0x5fd28f70e598cc93!2sSolano+Town+Center!5e0!3m2!1sen!2sus!4v1520529567180");
        break;
        case "Gaffney, SC":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26123.26889725146!2d-81.67674195154858!3d35.07152191712062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885705ab36119e55%3A0x53720605981663a5!2sLimestone+College!5e0!3m2!1sen!2sus!4v1520529685206");
        break;
        case "Haledon, NJ":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12056.466580907836!2d-74.19776336649623!3d40.93511067571012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fd09100815ad%3A0xbb80a1eb957d5177!2sThe+Shepherd+%26+the+Knucklehead+of+Haledon%2C+NJ!5e0!3m2!1sen!2sus!4v1520529762297");
        break;
        case "Ilion, NY":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11669.841393012808!2d-75.04748886209154!3d43.01069666549083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d94c17220a9c3f%3A0xcb9d87e9fe251a00!2sMohawk+Valley+Health+Care+Center!5e0!3m2!1sen!2sus!4v1520529919709");
        break;
        case "Jackson, TN":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51874.724616401894!2d-88.873637260811!3d35.648175896650834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887ea69c4344e307%3A0x40fca2edea2101e6!2sUnion+University!5e0!3m2!1sen!2sus!4v1520530006874");
        break;
        case "Kansas City, KS":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49524.23071826511!2d-94.78344715899786!3d39.12321399401793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c08cbfc961c57f%3A0x956e83aaa361c684!2sKansas+City+Kansas+Community+College!5e0!3m2!1sen!2sus!4v1520530110165");
        break;
        case "La Homa, TX":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28620.08773619303!2d-98.3661313980203!3d26.277530623704912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665af1c3360e0b1%3A0x8105623e60bd5756!2sPalmview+High+School!5e0!3m2!1sen!2sus!4v1520530181247");
        break;
        case "Madison, WI":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46603.60143836977!2d-89.36058896552616!3d43.11029193540327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880655b5d58756a1%3A0x91cbeef1128b04e6!2sDane+County+Regional+Airport!5e0!3m2!1sen!2sus!4v1520530259950");
        break;
        case "Naples, FL":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28648.08941252832!2d-81.8021814821416!3d26.163765475186274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dae226ec2f0581%3A0x100eacad8f5db2a0!2sNaples+Municipal+Airport!5e0!3m2!1sen!2sus!4v1520530353176");
        break;
        case "Oak Hill, WV":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12579.276843482588!2d-81.16200822232477!3d37.98134823521404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884ebfe111344e07%3A0xa0e72f95142044f8!2sHoliday+Lodge+Hotel+and+Conference+Center!5e0!3m2!1sen!2sus!4v1520530441994");
        break;
        case "Palatine, IL":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23681.896369403974!2d-88.06618872265206!3d42.10239378155409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa5b062b946b3%3A0x6125f9b73267a180!2sWilliam+Fremd+High+School!5e0!3m2!1sen!2sus!4v1520530505995");
        break;
        case "Quincy, MA":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11816.428818554286!2d-71.02051822718839!3d42.23352261454892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ccd43d39839%3A0xc30376ecd57e40d6!2sJohn+Adams+Birthplace+-+Adams+National+Historical+Park!5e0!3m2!1sen!2sus!4v1520530731677");
        break;
        case "Rainbow City, AL":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13240.305977116328!2d-86.08082198135499!3d33.93916063127455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888a3aed9d2064d3%3A0xd04e96b7ca7b2eca!2sRainbow+City+Recreation+Center!5e0!3m2!1sen!2sus!4v1520530861304");
        break;
        case "Safford, AZ":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26822.990986527482!2d-109.72496613691463!3d32.82210669835584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d7fc9017720617%3A0xe252216e8aca278e!2sBest+Western+Desert+Inn!5e0!3m2!1sen!2sus!4v1520530933797");
        break;
        case "Tahlequah, OK":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25859.079485643015!2d-94.99673449557555!3d35.888586917844634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c9f952f572ebd5%3A0x1b9df9ad9aa6bb9f!2sHoliday+Inn+Express+%26+Suites+Tahlequah!5e0!3m2!1sen!2sus!4v1520531004221");
        break;
        case "Uniontown, PA":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12243.873000484748!2d-79.73330231863163!3d39.89734313343001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88353e29b5facb15%3A0x3a7d268c9bf3a181!2sUniontown+Hospital!5e0!3m2!1sen!2sus!4v1520531093915");
        break;
        case "Vermillion, SD":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23425.445808400567!2d-96.94496589288892!3d42.78452911626512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878e4f88cb3c6435%3A0xe0c57e4b97cf9d6a!2sNational+Music+Museum!5e0!3m2!1sen!2sus!4v1520531161342");
        break;
        case "Waco, TX":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108798.08994189088!2d-97.25762566678563!3d31.553252684690403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f824e1e2ea939%3A0xa5e80cea97cc5157!2sDr+Pepper+Museum+%26+Free+Enterprise+Institute!5e0!3m2!1sen!2sus!4v1520531239001");
        break;
        case "Xenia, OH":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49126.27530542132!2d-83.97625137634705!3d39.68588474077732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884098767b73438d%3A0xf3c4fad853fc21ee!2sRamada+Xenia!5e0!3m2!1sen!2sus!4v1520531293430");
        break;
        case "York, ME":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93100.22211029055!2d-70.73550644192544!3d43.18049613846199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2bbaed3765fcf%3A0xb42a5e12ef1d9d36!2sBest+Western+York+Inn!5e0!3m2!1sen!2sus!4v1520531371318");
        break;
        case "Zuni Pueblo, NM":
        $("#outputmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52247.805357216894!2d-108.88017751218086!3d35.069541917246255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8725aae3ab242a07%3A0x5ba75d78e3a684fc!2sZuni+Tourism+Center!5e0!3m2!1sen!2sus!4v1520531431180");
        break;
      }
    }
  });
  

});