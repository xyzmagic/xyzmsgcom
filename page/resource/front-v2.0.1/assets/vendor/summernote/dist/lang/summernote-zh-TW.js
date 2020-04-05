(function($) {
  $.extend($.summernote.lang, {
    'zh-TW': {
      font: {
        bold: '绮楅珨',
        italic: '鏂滈珨',
        underline: '搴曠窔',
        clear: '娓呴櫎鏍煎紡',
        height: '琛岄珮',
        name: '瀛楅珨',
        strikethrough: '鍒櫎绶�',
        subscript: '涓嬫',
        superscript: '涓婃',
        size: '瀛楄櫉'
      },
      image: {
        image: '鍦栫墖',
        insert: '鎻掑叆鍦栫墖',
        resizeFull: '绺斁鑷�100%',
        resizeHalf: '绺斁鑷� 50%',
        resizeQuarter: '绺斁鑷� 25%',
        floatLeft: '闈犲乏娴嫊',
        floatRight: '闈犲彸娴嫊',
        floatNone: '鍙栨秷娴嫊',
        shapeRounded: '褰㈢媭: 鍦撹',
        shapeCircle: '褰㈢媭: 鍦�',
        shapeThumbnail: '褰㈢媭: 绺暐鍦�',
        shapeNone: '褰㈢媭: 鐒�',
        dragImageHere: '灏囧湒鐗囨嫋鏇宠嚦姝よ檿',
        dropImage: 'Drop image or Text',
        selectFromFiles: '寰炴湰姗熶笂鍌�',
        maximumFileSize: '鏂囦欢澶у皬鏈�澶у��',
        maximumFileSizeError: '鏂囦欢澶у皬瓒呭嚭鏈�澶у�笺��',
        url: '鍦栫墖缍插潃',
        remove: '绉婚櫎鍦栫墖',
        original: 'Original'
      },
      video: {
        video: '褰辩墖',
        videoLink: '褰辩墖閫ｇ祼',
        insert: '鎻掑叆褰辩墖',
        url: '褰辩墖缍插潃',
        providers: '(鍎叿, Instagram, DailyMotion, Youtube绛�)'
      },
      link: {
        link: '閫ｇ祼',
        insert: '鎻掑叆閫ｇ祼',
        unlink: '鍙栨秷閫ｇ祼',
        edit: '绶ㄨ集閫ｇ祼',
        textToDisplay: '椤ず鏂囧瓧',
        url: '閫ｇ祼缍插潃',
        openInNewWindow: '鍦ㄦ柊瑕栫獥闁嬪暉'
      },
      table: {
        table: '琛ㄦ牸',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: '姘村钩绶�'
      },
      style: {
        style: '妯ｅ紡',
        p: '涓�鑸�',
        blockquote: '寮曠敤鍗�濉�',
        pre: '绋嬪紡纰煎崁濉�',
        h1: '妯欓 1',
        h2: '妯欓 2',
        h3: '妯欓 3',
        h4: '妯欓 4',
        h5: '妯欓 5',
        h6: '妯欓 6'
      },
      lists: {
        unordered: '闋呯洰娓呭柈',
        ordered: '绶ㄨ櫉娓呭柈'
      },
      options: {
        help: '骞姪',
        fullscreen: '鍏ㄨ灑骞�',
        codeview: '鍘熷纰�'
      },
      paragraph: {
        paragraph: '娈佃惤',
        outdent: '鍙栨秷绺帓',
        indent: '澧炲姞绺帓',
        left: '闈犲彸灏嶉綂',
        center: '闈犱腑灏嶉綂',
        right: '闈犲彸灏嶉綂',
        justify: '宸﹀彸灏嶉綂'
      },
      color: {
        recent: '瀛楀瀷椤忚壊',
        more: '鏇村',
        background: '鑳屾櫙',
        foreground: '鍓嶆櫙',
        transparent: '閫忔槑',
        setTransparent: '閫忔槑',
        reset: '閲嶈ō',
        resetToDefault: '榛樿獚'
      },
      shortcut: {
        shortcuts: '蹇嵎閸�',
        close: '闂滈枆',
        textFormatting: '鏂囧瓧鏍煎紡',
        action: '鍕曚綔',
        paragraphFormatting: '娈佃惤鏍煎紡',
        documentStyle: '鏂囦欢鏍煎紡',
        extraKeys: '椤嶅鎸夐嵉'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: '寰╁師',
        redo: '鍙栨秷寰╁師'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });
})(jQuery);
