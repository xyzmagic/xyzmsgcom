(function($) {
  $.extend($.summernote.lang, {
    'fr-FR': {
      font: {
        bold: 'Gras',
        italic: 'Italique',
        underline: 'Soulign茅',
        clear: 'Effacer la mise en forme',
        height: 'Interligne',
        name: 'Famille de police',
        strikethrough: 'Barr茅',
        superscript: 'Exposant',
        subscript: 'Indice',
        size: 'Taille de police'
      },
      image: {
        image: 'Image',
        insert: 'Ins茅rer une image',
        resizeFull: 'Taille originale',
        resizeHalf: 'Redimensionner 脿 50 %',
        resizeQuarter: 'Redimensionner 脿 25 %',
        floatLeft: 'Align茅 脿 gauche',
        floatRight: 'Align茅 脿 droite',
        floatNone: 'Pas d\'alignement',
        shapeRounded: 'Forme: Rectangle arrondie',
        shapeCircle: 'Forme: Cercle',
        shapeThumbnail: 'Forme: Vignette',
        shapeNone: 'Forme: Aucune',
        dragImageHere: 'Faites glisser une image ou un texte dans ce cadre',
        dropImage: 'Lachez l\'image ou le texte',
        selectFromFiles: 'Choisir un fichier',
        maximumFileSize: 'Taille de fichier maximale',
        maximumFileSizeError: 'Taille maximale du fichier d茅pass茅e',
        url: 'URL de l\'image',
        remove: 'Supprimer l\'image',
        original: 'Original'
      },
      video: {
        video: 'Vid茅o',
        videoLink: 'Lien vid茅o',
        insert: 'Ins茅rer une vid茅o',
        url: 'URL de la vid茅o',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)'
      },
      link: {
        link: 'Lien',
        insert: 'Ins茅rer un lien',
        unlink: 'Supprimer un lien',
        edit: 'Modifier',
        textToDisplay: 'Texte 脿 afficher',
        url: 'URL du lien',
        openInNewWindow: 'Ouvrir dans une nouvelle fen锚tre'
      },
      table: {
        table: 'Tableau',
        addRowAbove: 'Ajouter une ligne au-dessus',
        addRowBelow: 'Ajouter une ligne en dessous',
        addColLeft: 'Ajouter une colonne 脿 gauche',
        addColRight: 'Ajouter une colonne 脿 droite',
        delRow: 'Supprimer la ligne',
        delCol: 'Supprimer la colonne',
        delTable: 'Supprimer le tableau'
      },
      hr: {
        insert: 'Ins茅rer une ligne horizontale'
      },
      style: {
        style: 'Style',
        p: 'Normal',
        blockquote: 'Citation',
        pre: 'Code source',
        h1: 'Titre 1',
        h2: 'Titre 2',
        h3: 'Titre 3',
        h4: 'Titre 4',
        h5: 'Titre 5',
        h6: 'Titre 6'
      },
      lists: {
        unordered: 'Liste 脿 puces',
        ordered: 'Liste num茅rot茅e'
      },
      options: {
        help: 'Aide',
        fullscreen: 'Plein 茅cran',
        codeview: 'Afficher le code HTML'
      },
      paragraph: {
        paragraph: 'Paragraphe',
        outdent: 'Diminuer le retrait',
        indent: 'Augmenter le retrait',
        left: 'Aligner 脿 gauche',
        center: 'Centrer',
        right: 'Aligner 脿 droite',
        justify: 'Justifier'
      },
      color: {
        recent: 'Derni猫re couleur s茅lectionn茅e',
        more: 'Plus de couleurs',
        background: 'Couleur de fond',
        foreground: 'Couleur de police',
        transparent: 'Transparent',
        setTransparent: 'D茅finir la transparence',
        reset: 'Restaurer',
        resetToDefault: 'Restaurer la couleur par d茅faut'
      },
      shortcut: {
        shortcuts: 'Raccourcis',
        close: 'Fermer',
        textFormatting: 'Mise en forme du texte',
        action: 'Action',
        paragraphFormatting: 'Mise en forme des paragraphes',
        documentStyle: 'Style du document',
        extraKeys: 'Touches suppl茅mentaires'
      },
      help: {
        'insertParagraph': 'Ins茅rer paragraphe',
        'undo': 'D茅faire la derni猫re commande',
        'redo': 'Refaire la derni猫re commande',
        'tab': 'Tabulation',
        'untab': 'Tabulation arri猫re',
        'bold': 'Mettre en caract猫re gras',
        'italic': 'Mettre en italique',
        'underline': 'Mettre en soulign茅',
        'strikethrough': 'Mettre en texte barr茅',
        'removeFormat': 'Nettoyer les styles',
        'justifyLeft': 'Aligner 脿 gauche',
        'justifyCenter': 'Centrer',
        'justifyRight': 'Aligner 脿 droite',
        'justifyFull': 'Justifier 脿 gauche et 脿 droite',
        'insertUnorderedList': 'Basculer liste 脿 puces',
        'insertOrderedList': 'Basculer liste ordonn茅e',
        'outdent': 'Diminuer le retrait du paragraphe',
        'indent': 'Augmenter le retrait du paragraphe',
        'formatPara': 'Changer le paragraphe en cours en normal (P)',
        'formatH1': 'Changer le paragraphe en cours en ent锚te H1',
        'formatH2': 'Changer le paragraphe en cours en ent锚te H2',
        'formatH3': 'Changer le paragraphe en cours en ent锚te H3',
        'formatH4': 'Changer le paragraphe en cours en ent锚te H4',
        'formatH5': 'Changer le paragraphe en cours en ent锚te H5',
        'formatH6': 'Changer le paragraphe en cours en ent锚te H6',
        'insertHorizontalRule': 'Ins茅rer s茅paration horizontale',
        'linkDialog.show': 'Afficher fen锚tre d\'hyperlien'
      },
      history: {
        undo: 'Annuler la derni猫re action',
        redo: 'Restaurer la derni猫re action annul茅e'
      },
      specialChar: {
        specialChar: 'CARACT脠RES SP脡CIAUX',
        select: 'Choisir des caract猫res sp茅ciaux'
      }
    }
  });
})(jQuery);
