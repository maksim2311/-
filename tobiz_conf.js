/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'ru';
//config.uiColor = '#AADC6E';
//	config.plugins = 'youtube,dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,floatingspace,listblock,richcombo,font,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentblock,indentlist,justify,menubutton,link,list,liststyle,magicline,maximize,pastetext,pastefromword,removeformat,selectall,showblocks,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,undo,wsc';
	//config.skin = 'moono';
        
        
	config.extraPlugins = 'lineheight';
	config.autoParagraph = false;

	//config.extraPlugins = 'pastefromword';
    config.extraPlugins = 'indent';



//    config.pasteFromWordPromptCleanup	= true;
//    config.pasteFromWordCleanupFile = true;
//    config.pasteFromWordRemoveFontStyles = true;
//    config.pasteFromWordRemoveStyles = true;
//    
//    config.pasteFromWordPromptCleanup	= false;
//    config.pasteFromWordCleanupFile = false;
//    config.pasteFromWordRemoveFontStyles = false;
//    config.pasteFromWordRemoveStyles = false;
    
    
    
    //	config.pasteFromWordNumberedHeadingToList = true;
    
//	config.font_names = 'Comic Neue/Comic Neue, cursive;' + config.font_names;
//	config.font_names = 'Crushed/Crushed, cursive;' + config.font_names;
//	config.font_names = 'Lilita One/Lilita One, cursive;' + config.font_names;
//	config.font_names = 'Montserrat/Montserrat, sans-serif;' + config.font_names;
//	config.font_names = 'Montserrat Alternates/Montserrat Alternates, sans-serif;' + config.font_names;
//	config.font_names = 'Nanum Brush Script/Nanum Brush Script, cursive;' + config.font_names;
//	config.font_names = 'Neucha/Neucha, cursive;' + config.font_names;
//	config.font_names = 'Open Sans/Open Sans, sans-serif;' + config.font_names;
//	config.font_names = 'Open Sans Condensed/Open Sans Condensed, sans-serif;' + config.font_names;
//	config.font_names = 'Poiret One/Poiret One, cursive;' + config.font_names;
//	config.font_names = 'PT Sans/PT Sans, sans-serif;' + config.font_names;
//	config.font_names = 'PT Sans Caption/PT Sans Caption, sans-serif;' + config.font_names;
//	config.font_names = 'PT Sans Narrow/PT Sans Narrow, sans-serif;' + config.font_names;
//	config.font_names = 'Roboto/Roboto, sans-serif;' + config.font_names;
//	config.font_names = 'Roboto Condensed/Roboto Condensed, sans-serif;' + config.font_names;
//	config.font_names = 'Ruslan Display/Ruslan Display, cursive;' + config.font_names;
//	config.font_names = 'Russo One/Russo One, sans-serif;' + config.font_names;
//	config.font_names = 'Ubuntu/Ubuntu, sans-serif;' + config.font_names;
//	config.font_names = 'Ubuntu Condensed/Ubuntu Condensed, sans-serif;' + config.font_names;
//	config.font_names = 'Andika/Andika, sans-serif;' + config.font_names;
//	config.font_names = 'Audiowide/Audiowide, cursive;' + config.font_names;
//	config.font_names = 'Bellota/Bellota, cursive;' + config.font_names;
//	config.font_names = 'Caveat/Caveat, cursive;' + config.font_names;
//	config.font_names = 'Cormorant SC/Cormorant SC, serif;' + config.font_names;
//	config.font_names = 'Cormorant Upright/Cormorant Upright, serif;' + config.font_names;
//	config.font_names = 'Lobster/Lobster, cursive;' + config.font_names;
//	config.font_names = 'Nunito/Nunito, sans-serif;' + config.font_names;
//	config.font_names = 'Oswald/Oswald, sans-serif;' + config.font_names;
//	config.font_names = 'Pacifico/Pacifico, cursive;' + config.font_names;
//	config.font_names = 'Play/Play, sans-serif;' + config.font_names;
//	config.font_names = 'Prosto One/Prosto One, cursive;' + config.font_names;
//	config.font_names = 'Raleway/Raleway, sans-serif;' + config.font_names;
//	config.font_names = 'Reggae One/Reggae One, cursive;' + config.font_names;
//	config.font_names = 'Alegreya Sans/Alegreya Sans, sans-serif;' + config.font_names;
//	config.font_names = 'Alegreya/Alegreya, serif;' + config.font_names;
	//config.font_names = 'Rubik Mono One/Rubik Mono One, sans-serif;' + config.font_names;
	
	
	// New cyrillic fonts
	config.font_names = 'Roboto/Roboto,sans-serif;' + config.font_names;
	config.font_names = 'Open Sans/Open Sans,sans-serif;' + config.font_names;
	config.font_names = 'Noto Sans JP/Noto Sans JP,sans-serif;' + config.font_names;
	config.font_names = 'Montserrat/Montserrat,sans-serif;' + config.font_names;
	config.font_names = 'Roboto Condensed/Roboto Condensed,sans-serif;' + config.font_names;
	config.font_names = 'Inter/Inter,sans-serif;' + config.font_names;
	config.font_names = 'Roboto Mono/Roboto Mono,monospace;' + config.font_names;
	config.font_names = 'Oswald/Oswald,sans-serif;' + config.font_names;
	config.font_names = 'Noto Sans/Noto Sans,sans-serif;' + config.font_names;
	config.font_names = 'Raleway/Raleway,sans-serif;' + config.font_names;
	config.font_names = 'Nunito Sans/Nunito Sans,sans-serif;' + config.font_names;
	config.font_names = 'Nunito/Nunito,sans-serif;' + config.font_names;
	config.font_names = 'Playfair Display/Playfair Display,serif;' + config.font_names;
	config.font_names = 'Ubuntu/Ubuntu,sans-serif;' + config.font_names;
	config.font_names = 'Rubik/Rubik,sans-serif;' + config.font_names;
	config.font_names = 'Roboto Slab/Roboto Slab,serif;' + config.font_names;
	config.font_names = 'Merriweather/Merriweather,serif;' + config.font_names;
	config.font_names = 'Noto Sans KR/Noto Sans KR,sans-serif;' + config.font_names;
	config.font_names = 'PT Sans/PT Sans,sans-serif;' + config.font_names;
	config.font_names = 'Lora/Lora,serif;' + config.font_names;
	config.font_names = 'Noto Sans TC/Noto Sans TC,sans-serif;' + config.font_names;
	config.font_names = 'Fira Sans/Fira Sans,sans-serif;' + config.font_names;
	config.font_names = 'Mulish/Mulish,sans-serif;' + config.font_names;
	config.font_names = 'IBM Plex Sans/IBM Plex Sans,sans-serif;' + config.font_names;
	config.font_names = 'PT Serif/PT Serif,serif;' + config.font_names;
	config.font_names = 'Manrope/Manrope,sans-serif;' + config.font_names;
	config.font_names = 'Noto Serif/Noto Serif,serif;' + config.font_names;
	config.font_names = 'Arimo/Arimo,sans-serif;' + config.font_names;
	config.font_names = 'Source Code Pro/Source Code Pro,monospace;' + config.font_names;
	config.font_names = 'PT Sans Narrow/PT Sans Narrow,sans-serif;' + config.font_names;
	config.font_names = 'Bitter/Bitter,serif;' + config.font_names;
	config.font_names = 'EB Garamond/EB Garamond,serif;' + config.font_names;
	config.font_names = 'Jost/Jost,sans-serif;' + config.font_names;
	config.font_names = 'Noto Sans SC/Noto Sans SC,sans-serif;' + config.font_names;
	config.font_names = 'Exo 2/Exo 2,sans-serif;' + config.font_names;
	config.font_names = 'Pacifico/Pacifico,handwriting;' + config.font_names;
	config.font_names = 'Lobster/Lobster,display;' + config.font_names;
	config.font_names = 'Comfortaa/Comfortaa,display;' + config.font_names;
	config.font_names = 'IBM Plex Mono/IBM Plex Mono,monospace;' + config.font_names;
	config.font_names = 'M PLUS Rounded 1c/M PLUS Rounded 1c,sans-serif;' + config.font_names;
	config.font_names = 'Caveat/Caveat,handwriting;' + config.font_names;
	config.font_names = 'Overpass/Overpass,sans-serif;' + config.font_names;
	config.font_names = 'Source Sans 3/Source Sans 3,sans-serif;' + config.font_names;
	config.font_names = 'Cormorant Garamond/Cormorant Garamond,serif;' + config.font_names;
	config.font_names = 'Fira Sans Condensed/Fira Sans Condensed,sans-serif;' + config.font_names;
	config.font_names = 'Play/Play,sans-serif;' + config.font_names;
	config.font_names = 'Yanone Kaffeesatz/Yanone Kaffeesatz,sans-serif;' + config.font_names;
	config.font_names = 'IBM Plex Serif/IBM Plex Serif,serif;' + config.font_names;
	config.font_names = 'Didact Gothic/Didact Gothic,sans-serif;' + config.font_names;
	config.font_names = 'M PLUS 1p/M PLUS 1p,sans-serif;' + config.font_names;
	config.font_names = 'Russo One/Russo One,sans-serif;' + config.font_names;
	config.font_names = 'Noto Sans HK/Noto Sans HK,sans-serif;' + config.font_names;
	config.font_names = 'Vollkorn/Vollkorn,serif;' + config.font_names;
	config.font_names = 'Source Serif 4/Source Serif 4,serif;' + config.font_names;
	config.font_names = 'Amatic SC/Amatic SC,handwriting;' + config.font_names;
	config.font_names = 'Montserrat Alternates/Montserrat Alternates,sans-serif;' + config.font_names;
	config.font_names = 'Cormorant/Cormorant,serif;' + config.font_names;
	config.font_names = 'Alegreya Sans/Alegreya Sans,sans-serif;' + config.font_names;
	config.font_names = 'Alegreya/Alegreya,serif;' + config.font_names;
	config.font_names = 'Spectral/Spectral,serif;' + config.font_names;
	config.font_names = 'Philosopher/Philosopher,sans-serif;' + config.font_names;
	config.font_names = 'Roboto Flex/Roboto Flex,sans-serif;' + config.font_names;
	config.font_names = 'Tinos/Tinos,serif;' + config.font_names;
	config.font_names = 'Ubuntu Condensed/Ubuntu Condensed,sans-serif;' + config.font_names;
	config.font_names = 'Arsenal/Arsenal,sans-serif;' + config.font_names;
	config.font_names = 'PT Sans Caption/PT Sans Caption,sans-serif;' + config.font_names;
	config.font_names = 'Prata/Prata,serif;' + config.font_names;
	config.font_names = 'Ruda/Ruda,sans-serif;' + config.font_names;
	config.font_names = 'Noto Sans Display/Noto Sans Display,sans-serif;' + config.font_names;
	config.font_names = 'Alice/Alice,serif;' + config.font_names;
	config.font_names = 'El Messiri/El Messiri,sans-serif;' + config.font_names;
	config.font_names = 'Old Standard TT/Old Standard TT,serif;' + config.font_names;
	config.font_names = 'Inter Tight/Inter Tight,sans-serif;' + config.font_names;
	config.font_names = 'Ubuntu Mono/Ubuntu Mono,monospace;' + config.font_names;
	config.font_names = 'Sawarabi Gothic/Sawarabi Gothic,sans-serif;' + config.font_names;
	config.font_names = 'Unbounded/Unbounded,sans-serif;' + config.font_names;
	config.font_names = 'Advent Pro/Advent Pro,sans-serif;' + config.font_names;
	config.font_names = 'Alegreya Sans SC/Alegreya Sans SC,sans-serif;' + config.font_names;
	config.font_names = 'Roboto Serif/Roboto Serif,serif;' + config.font_names;
	config.font_names = 'Press Start 2P/Press Start 2P,display;' + config.font_names;
	config.font_names = 'Cuprum/Cuprum,sans-serif;' + config.font_names;
	config.font_names = 'Rubik Mono One/Rubik Mono One,sans-serif;' + config.font_names;
	config.font_names = 'Poiret One/Poiret One,display;' + config.font_names;
	config.font_names = 'Fira Sans Extra Condensed/Fira Sans Extra Condensed,sans-serif;' + config.font_names;
	config.font_names = 'Literata/Literata,serif;' + config.font_names;
	config.font_names = 'Commissioner/Commissioner,sans-serif;' + config.font_names;
	config.font_names = 'Yeseva One/Yeseva One,display;' + config.font_names;
	config.font_names = 'Playfair Display SC/Playfair Display SC,serif;' + config.font_names;
	config.font_names = 'Zen Kaku Gothic New/Zen Kaku Gothic New,sans-serif;' + config.font_names;
	config.font_names = 'PT Mono/PT Mono,monospace;' + config.font_names;
	config.font_names = 'Tenor Sans/Tenor Sans,sans-serif;' + config.font_names;
	config.font_names = 'Dela Gothic One/Dela Gothic One,display;' + config.font_names;
	config.font_names = 'Kosugi Maru/Kosugi Maru,sans-serif;' + config.font_names;
	config.font_names = 'Neucha/Neucha,handwriting;' + config.font_names;
	config.font_names = 'Cousine/Cousine,monospace;' + config.font_names;
	config.font_names = 'Sofia Sans Condensed/Sofia Sans Condensed,sans-serif;' + config.font_names;
	config.font_names = 'JetBrains Mono/JetBrains Mono,monospace;' + config.font_names;
	config.font_names = 'Anonymous Pro/Anonymous Pro,monospace;' + config.font_names;
	config.font_names = 'Playfair/Playfair,serif;' + config.font_names;
	config.font_names = 'Bad Script/Bad Script,handwriting;' + config.font_names;
	config.font_names = 'Istok Web/Istok Web,sans-serif;' + config.font_names;
	config.font_names = 'Sofia Sans/Sofia Sans,sans-serif;' + config.font_names;
	config.font_names = 'Marck Script/Marck Script,handwriting;' + config.font_names;
	config.font_names = 'Fira Mono/Fira Mono,monospace;' + config.font_names;
	config.font_names = 'Pangolin/Pangolin,handwriting;' + config.font_names;
	config.font_names = 'Zen Maru Gothic/Zen Maru Gothic,sans-serif;' + config.font_names;
	config.font_names = 'Jura/Jura,sans-serif;' + config.font_names;
	config.font_names = 'Forum/Forum,display;' + config.font_names;
	config.font_names = 'Noto Sans Mono/Noto Sans Mono,sans-serif;' + config.font_names;
	config.font_names = 'STIX Two Text/STIX Two Text,serif;' + config.font_names;
	config.font_names = 'BIZ UDPGothic/BIZ UDPGothic,sans-serif;' + config.font_names;
	config.font_names = 'Oranienbaum/Oranienbaum,serif;' + config.font_names;
	config.font_names = 'Fira Code/Fira Code,monospace;' + config.font_names;
	config.font_names = 'Kurale/Kurale,serif;' + config.font_names;
	config.font_names = 'PT Serif Caption/PT Serif Caption,serif;' + config.font_names;
	config.font_names = 'Scada/Scada,sans-serif;' + config.font_names;
	config.font_names = 'Geologica/Geologica,sans-serif;' + config.font_names;
	config.font_names = 'Rubik Moonrocks/Rubik Moonrocks,display;' + config.font_names;
	config.font_names = 'Balsamiq Sans/Balsamiq Sans,display;' + config.font_names;
	config.font_names = 'Golos Text/Golos Text,sans-serif;' + config.font_names;
	config.font_names = 'Cormorant Infant/Cormorant Infant,serif;' + config.font_names;
	config.font_names = 'Overpass Mono/Overpass Mono,monospace;' + config.font_names;
	config.font_names = 'Alumni Sans/Alumni Sans,sans-serif;' + config.font_names;
	config.font_names = 'Pattaya/Pattaya,sans-serif;' + config.font_names;
	config.font_names = 'Brygada 1918/Brygada 1918,serif;' + config.font_names;
	config.font_names = 'Vollkorn SC/Vollkorn SC,serif;' + config.font_names;
	config.font_names = 'Kiwi Maru/Kiwi Maru,serif;' + config.font_names;
	config.font_names = 'Zen Old Mincho/Zen Old Mincho,serif;' + config.font_names;
	config.font_names = 'Marmelad/Marmelad,sans-serif;' + config.font_names;
	config.font_names = 'Noto Serif Display/Noto Serif Display,serif;' + config.font_names;
	config.font_names = 'Alegreya SC/Alegreya SC,serif;' + config.font_names;
	config.font_names = 'Zen Antique/Zen Antique,serif;' + config.font_names;
	config.font_names = 'Klee One/Klee One,handwriting;' + config.font_names;
	config.font_names = 'Podkova/Podkova,serif;' + config.font_names;
	config.font_names = 'Kosugi/Kosugi,sans-serif;' + config.font_names;
	config.font_names = 'Cormorant SC/Cormorant SC,serif;' + config.font_names;
	config.font_names = 'Andika/Andika,sans-serif;' + config.font_names;
	config.font_names = 'Spectral SC/Spectral SC,serif;' + config.font_names;
	config.font_names = 'Zen Kaku Gothic Antique/Zen Kaku Gothic Antique,sans-serif;' + config.font_names;
	config.font_names = 'Gabriela/Gabriela,serif;' + config.font_names;
	config.font_names = 'Kaisei Decol/Kaisei Decol,serif;' + config.font_names;
	config.font_names = 'Sofia Sans Extra Condensed/Sofia Sans Extra Condensed,sans-serif;' + config.font_names;
	config.font_names = 'Wix Madefor Display/Wix Madefor Display,sans-serif;' + config.font_names;
	config.font_names = 'DotGothic16/DotGothic16,sans-serif;' + config.font_names;
	config.font_names = 'RocknRoll One/RocknRoll One,sans-serif;' + config.font_names;
	config.font_names = 'Kelly Slab/Kelly Slab,display;' + config.font_names;
	config.font_names = 'Bellota Text/Bellota Text,display;' + config.font_names;
	config.font_names = 'Flow Circular/Flow Circular,display;' + config.font_names;
	config.font_names = 'Zen Kurenaido/Zen Kurenaido,sans-serif;' + config.font_names;
	config.font_names = 'Prosto One/Prosto One,display;' + config.font_names;
	config.font_names = 'BIZ UDGothic/BIZ UDGothic,sans-serif;' + config.font_names;
	config.font_names = 'Orelega One/Orelega One,display;' + config.font_names;
	config.font_names = 'Martian Mono/Martian Mono,monospace;' + config.font_names;
	config.font_names = 'Ledger/Ledger,serif;' + config.font_names;
	config.font_names = 'Wix Madefor Text/Wix Madefor Text,sans-serif;' + config.font_names;
	config.font_names = 'Kaisei Opti/Kaisei Opti,serif;' + config.font_names;
	config.font_names = 'BIZ UDPMincho/BIZ UDPMincho,serif;' + config.font_names;
	config.font_names = 'Cormorant Unicase/Cormorant Unicase,serif;' + config.font_names;
	config.font_names = 'Ruslan Display/Ruslan Display,display;' + config.font_names;
	config.font_names = 'IBM Plex Sans JP/IBM Plex Sans JP,sans-serif;' + config.font_names;
	config.font_names = 'Reggae One/Reggae One,display;' + config.font_names;
	config.font_names = 'Kaisei Tokumin/Kaisei Tokumin,serif;' + config.font_names;
	config.font_names = 'Comforter Brush/Comforter Brush,handwriting;' + config.font_names;
	config.font_names = 'Bellota/Bellota,display;' + config.font_names;
	config.font_names = 'Zen Antique Soft/Zen Antique Soft,serif;' + config.font_names;
	config.font_names = 'Sofia Sans Semi Condensed/Sofia Sans Semi Condensed,sans-serif;' + config.font_names;
	config.font_names = 'Rubik Dirt/Rubik Dirt,display;' + config.font_names;
	config.font_names = 'Hina Mincho/Hina Mincho,serif;' + config.font_names;
	config.font_names = 'Murecho/Murecho,sans-serif;' + config.font_names;
	config.font_names = 'Rampart One/Rampart One,display;' + config.font_names;
	config.font_names = 'Noto Serif HK/Noto Serif HK,serif;' + config.font_names;
	config.font_names = 'Hachi Maru Pop/Hachi Maru Pop,handwriting;' + config.font_names;
	config.font_names = 'Bona Nova/Bona Nova,serif;' + config.font_names;
	config.font_names = 'Shantell Sans/Shantell Sans,display;' + config.font_names;
	config.font_names = 'Stick/Stick,sans-serif;' + config.font_names;
	config.font_names = 'Yuji Syuku/Yuji Syuku,serif;' + config.font_names;
	config.font_names = 'Kaisei HarunoUmi/Kaisei HarunoUmi,serif;' + config.font_names;
	config.font_names = 'Onest/Onest,sans-serif;' + config.font_names;
	config.font_names = 'Tektur/Tektur,display;' + config.font_names;
	config.font_names = 'Seymour One/Seymour One,sans-serif;' + config.font_names;
	config.font_names = 'Train One/Train One,display;' + config.font_names;
	config.font_names = 'Yomogi/Yomogi,handwriting;' + config.font_names;
	config.font_names = 'Piazzolla/Piazzolla,serif;' + config.font_names;
	config.font_names = 'Rubik Bubbles/Rubik Bubbles,display;' + config.font_names;
	config.font_names = 'Underdog/Underdog,display;' + config.font_names;
	config.font_names = 'Viaoda Libre/Viaoda Libre,display;' + config.font_names;
	config.font_names = 'Comforter/Comforter,handwriting;' + config.font_names;
	config.font_names = 'Pixelify Sans/Pixelify Sans,display;' + config.font_names;
	config.font_names = 'BIZ UDMincho/BIZ UDMincho,serif;' + config.font_names;
	config.font_names = 'Charis SIL/Charis SIL,serif;' + config.font_names;
	config.font_names = 'Gentium Book Plus/Gentium Book Plus,serif;' + config.font_names;
	config.font_names = 'Carlito/Carlito,sans-serif;' + config.font_names;
	config.font_names = 'Gentium Plus/Gentium Plus,serif;' + config.font_names;
	config.font_names = 'Finlandica/Finlandica,sans-serif;' + config.font_names;
	config.font_names = 'Rubik Glitch/Rubik Glitch,display;' + config.font_names;
	config.font_names = 'Stalinist One/Stalinist One,display;' + config.font_names;
	config.font_names = 'Rubik Wet Paint/Rubik Wet Paint,display;' + config.font_names;
	config.font_names = 'Ysabeau/Ysabeau,sans-serif;' + config.font_names;
	config.font_names = 'Ysabeau Infant/Ysabeau Infant,sans-serif;' + config.font_names;
	config.font_names = 'Rubik Beastly/Rubik Beastly,display;' + config.font_names;
	config.font_names = 'Yuji Mai/Yuji Mai,serif;' + config.font_names;
	config.font_names = 'Victor Mono/Victor Mono,monospace;' + config.font_names;
	config.font_names = 'Ysabeau Office/Ysabeau Office,sans-serif;' + config.font_names;
	config.font_names = 'Yuji Boku/Yuji Boku,serif;' + config.font_names;
	config.font_names = 'Rubik Distressed/Rubik Distressed,display;' + config.font_names;
	config.font_names = 'Rubik Vinyl/Rubik Vinyl,display;' + config.font_names;
	config.font_names = 'Handjet/Handjet,display;' + config.font_names;
	config.font_names = 'Rubik Iso/Rubik Iso,display;' + config.font_names;
	config.font_names = 'Alumni Sans Collegiate One/Alumni Sans Collegiate One,sans-serif;' + config.font_names;
	config.font_names = 'Alumni Sans Pinstripe/Alumni Sans Pinstripe,sans-serif;' + config.font_names;
	config.font_names = 'Oi/Oi,display;' + config.font_names;
	config.font_names = 'Ysabeau SC/Ysabeau SC,sans-serif;' + config.font_names;
	config.font_names = 'Rubik 80s Fade/Rubik 80s Fade,display;' + config.font_names;
	config.font_names = 'Kablammo/Kablammo,display;' + config.font_names;
	config.font_names = 'Rubik Microbe/Rubik Microbe,display;' + config.font_names;
	config.font_names = 'Rubik Pixels/Rubik Pixels,display;' + config.font_names;
	config.font_names = 'Flow Block/Flow Block,display;' + config.font_names;
	config.font_names = 'Rubik Spray Paint/Rubik Spray Paint,display;' + config.font_names;
	config.font_names = 'Lunasima/Lunasima,sans-serif;' + config.font_names;
	config.font_names = 'Rubik Puddles/Rubik Puddles,display;' + config.font_names;
	config.font_names = 'Rubik Gemstones/Rubik Gemstones,display;' + config.font_names;
	config.font_names = 'Flow Rounded/Flow Rounded,display;' + config.font_names;
	config.font_names = 'Rubik Storm/Rubik Storm,display;' + config.font_names;
	config.font_names = 'Rubik Marker Hatch/Rubik Marker Hatch,display;' + config.font_names;
	config.font_names = 'Rubik Burned/Rubik Burned,display;' + config.font_names;
	config.font_names = 'Rubik Maze/Rubik Maze,display;' + config.font_names;

	config.toolbar = [
		['Undo','Redo'],
		['Bold','Italic','Underline','Strike','RemoveFormat'],
		['NumberedList','BulletedList'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink'],
		['SpellCheck','mkField'],
		['Styles','Format','Font','FontSize', 'TextColor','BGColor','Outdent','Indent']
	];

    config.fontSize_sizes = '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;17/17px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;30/30px;32/32px;36/36px;40/40px;42/42px;44/44px;46/46px;48/48px;50/50px;52/52px;54/54px;56/56px;58/58px;60/60px;62/62px;64/64px;66/66px;68/68px;70/70px;72/72px;90/90px';



};
