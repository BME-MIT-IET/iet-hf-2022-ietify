# Add CI/CD workflow

## Elvégzett munka:
> Ebben a feladatban a test.yml ben leírt workflowt implementáltam és a teszteken javítottam

## Tervezése:
1. Build rendszer már be van üzemelve van npm a projektben
2. Vannak a projektben már megírt mocha tesztek, ezeket npm run test el már lehet futtatni
3. A többiek által készített bdd tesztek npx cucumber-js paranccsal futtathatoak
4. Néhány teszt skipped állapotú mivel a hozzájuk tartozó forráskód nem helyes
5. Megjavítani a forráskódba, hogy a path ban lévő + karaktereket ne szóközként ismerje fel

## Eredmények
> Az elkészített workflow minden pull request eseménykor lefut és lefuttatja a mocha és bdd teszteket

## Tanulságok
> Jobban megismertem a github workflowk működését például, hogy hogyan lehet chachelni az npm csomagokat, mert igy ha nem változik a package.json akkor
    a chache ből visszatölti a függőségeket ezzel kihagyva az npm installt és megfelezve a teljes futásidőt. (@Tibi3k)
> Kicsit elmályedtem a libraryben magában hiszen a + karakteres hibák kijavításához az eredeti kódot kellett módosítanom. Ehez jól jöttek a tesztek, hogy 
    megmutassák, még mindig helyesen működik a program. (@Tibi3k)

