import { FC } from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={language}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  { value: 'Natural Language', 	label: 'Natural Language' },
  { value: 'ActionScript', 	label: 'ActionScript' },
  { value: 'Ada', 		label: 'Ada' },
  { value: 'Apache Conf', 	label: 'Apache Conf' },
  { value: 'AppleScript', 	label: 'AppleScript' },
  { value: 'Arduino', 		label: 'Arduino' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'Assembly x86', 	label: 'Assembly x86' },
  { value: 'AutoHotKey', 	label: 'AutoHotKey' },
  { value: 'Bash', 		label: 'Bash' },
  { value: 'Brainfuck', 	label: 'Brainfuck' },
  { value: 'Arduino', 		label: 'Arduino' },
  { value: 'C', 		label: 'C' },
  { value: 'C++', 		label: 'C++' },
  { value: 'C#', 		label: 'C#' },
  { value: 'Clojure', 		label: 'Clojure' },
  { value: 'COBOL', 		label: 'COBOL' },
  { value: 'CoffeeScript', 	label: 'CoffeeScript' },
  { value: 'CSS', 		label: 'CSS' },
  { value: 'D', 		label: 'D' },
  { value: 'Dart', 		label: 'Dart' },
  { value: 'Django', 		label: 'Django' },
  { value: 'EasyLanguage', 	label: 'EasyLanguage' },
  { value: 'EJS', 		label: 'EJS' },
  { value: 'Elixir', 		label: 'Elixir' },
  { value: 'Elm', 		label: 'Elm' },
  { value: 'Erlrang', 		label: 'Erlrang' },
  { value: 'Fortran', 		label: 'Fortran' },
  { value: 'FTL', 		label: 'FTL' },
  { value: 'GLSL', 		label: 'GLSL' },
  { value: 'Go', 		label: 'Go' },
  { value: 'Groovy', 		label: 'Groovy' },
  { value: 'Haml', 		label: 'Haml' },
  { value: 'Handlebars', 	label: 'Handlebars' },
  { value: 'Haskell', 		label: 'Haskell' },
  { value: 'Haxe', 		label: 'Haxe' },
  { value: 'HTML', 		label: 'HTML' },
  { value: 'Java', 		label: 'Java' },
  { value: 'JavaScript', 	label: 'JavaScript' },
  { value: 'JSP', 		label: 'JSP' },
  { value: 'JSX', 		label: 'JSX' },
  { value: 'Julia', 		label: 'Julia' },
  { value: 'Kotlin', 		label: 'Kotlin' },
  { value: 'LaTeX', 		label: 'LaTeX' },
  { value: 'Lisp', 		label: 'Lisp' },
  { value: 'LiveScript', 	label: 'LiveScript' },
  { value: 'LSL', 		label: 'LSL' },
  { value: 'Lua', 		label: 'Lua' },
  { value: 'Makefile', 		label: 'Makefile' },
  { value: 'Matlab', 		label: 'Matlab' },
  { value: 'Mojo', 		label: 'Mojo' },
  { value: 'MoonScript', 	label: 'MoonScript' },
  { value: 'MQL4',		label: 'MQL4' },
  { value: 'MQL5', 		label: 'MQL5' },
  { value: 'NoSQL', 		label: 'NoSQL' },
  { value: 'Nunjucks', 		label: 'Nunjucks' },
  { value: 'Objective-C', 	label: 'Objective-C' },
  { value: 'Pascal', 		label: 'Pascal' },
  { value: 'Perl', 		label: 'Perl' },
  { value: 'PHP', 		label: 'PHP' },
  { value: 'PL/SQL', 		label: 'PL/SQL' },
  { value: 'PostScript', 	label: 'PostScript' },
  { value: 'Powershell', 	label: 'Powershell' },
  { value: 'Prolog', 		label: 'Prolog' },
  { value: 'Protobuf', 		label: 'Protobuf' },
  { value: 'Python', 		label: 'Python' },
  { value: 'R', 		label: 'R' },
  { value: 'Razor', 		label: 'Razor' },
  { value: 'Racket', 		label: 'Racket' },
  { value: 'Ruby', 		label: 'Ruby' },
  { value: 'Rust', 		label: 'Rust' },
  { value: 'SAS', 		label: 'SAS' },
  { value: 'Scala', 		label: 'Scala' },
  { value: 'Scratch', 		label: 'Scratch' },
  { value: 'SDL', 		label: 'SDL' },
  { value: 'Swift', 		label: 'Swift' },
  { value: 'SQL', 		label: 'SQL' },
  { value: 'Swift', 		label: 'Swift' },
  { value: 'SwiftUI', 		label: 'SwiftUI' },
  { value: 'TOML', 		label: 'TOML' },
  { value: 'TSX', 		label: 'TSX' },
  { value: 'Twig', 		label: 'Twig' },
  { value: 'TypeScript', 	label: 'TypeScript' },
  { value: 'Vala', 		label: 'Vala' },
  { value: 'Visual Basic', 	label: 'Visual Basic' },
  { value: 'VB6', 		label: 'Visual Basic 6 - VB6' },
  { value: 'VB.NET', 		label: 'VB.NET' },
  { value: 'VBScript', 		label: 'VBScript' },
  { value: 'Velocity', 		label: 'Velocity' },
  { value: 'Verilog', 		label: 'Verilog' },
  { value: 'Vue', 		label: 'Vue' },
  { value: 'ZenScript', 	label: 'ZenScript' },
  { value: 'Zig', 		label: 'Zig' },
  { value: 'Zsh', 		label: 'Zsh' },		
			
  { value: 'Ocatve or GNU Octave', 		label: 'GNU Octave' },
		 
  { value: 'Mathematica', 		label: 'Mathematica' },		

  { value: 'ThinkScript', 				label: 'ThinkScript' },

  { value: 'C++ for SierraChart trading platform, utilizes ACSIL programming concepts', 		label: 'SierraChart - C++' },		

  { value: 'Visual Basic for Applications (VBA)', 	label: 'Visual Basic for Applications (VBA)' },	

  { value: 'Esignal Formula Script (EFS)', 		label: 'Esignal Formula Script (EFS)' },

  { value: 'ProBuilder/ProRealCode, code for the trading platform ProRealTime. Its programming language is ProBuilder (also known as ProRealCode).',         label: 'ProRealCode' },

  { value: 'MetaStock Formula Language (MFL)', 		label: 'MetaStock Formula Language (MFL)' },

  { value: 'Amibroker Formula Language (AFL)', 		label: 'Amibroker Formula Language (AFL)' },

  { value: 'NinjaScript for NinjaTrader 7, NinjaScript is a nuanced language is written in C# targeting .NET 3.5 Care needs to be taken to ensure the code is not broken by incorrectly referencing C# or a different version of NinjaScript.', label: 'NinjaScript 7' },

  { value: 'NinjaScript for NinjaTrader 8.1.2.0 or higher, NinjaScript is a nuanced language written in C# targeting .NET 8.0 Care needs to be taken to ensure the code is not broken by incorrectly referencing C# or a different version of NinjaScript.', label: 'NinjaScript >= 8.1.2.0' },

  { value: 'NinjaScript for NinjaTrader 8.1.1.7 or lower, NinjaScript is a nuanced language written in C# targeting .NET 4.8 Care needs to be taken to ensure the code is not broken by incorrectly referencing C# or a different version of NinjaScript.', label: 'NinjaScript <= 8.1.1.7' },

  { value: 'Pine Script V3, Pine Script™ is TradingView.com’s programming language. Helpguides are available at https://www.tradingview.com/pine-script-docs/en/v3 ', label: 'Pine Script v3' },

  { value: 'Pine Script V4, Pine Script™ is TradingView.com’s programming language. Helpguides are available at https://www.tradingview.com/pine-script-docs/en/v4 ', label: 'Pine Script v4' },

  { value: 'Pine Script V5, Pine Script™ is TradingView.com’s programming language. Helpguides are available at https://www.tradingview.com/pine-script-docs/en/v5 ', label: 'Pine Script v5' },

  { value: 'Code Repair', label: 'Code Repair/Editor, Make a note at the end of broken code with a reference to the presented language.' },
];
