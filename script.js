const branches = [{
    name: "branch_name",
    displayedName: "Branch Name",
    type: "text"
},
{
    name: "branch_id",
    displayedName: "Branch Unique ID",
    type: "text"
},
{
    name: "branch_parent",
    displayedName: "Parent",
    type: "text",
    defaultValue: "apidae",
    description: "For bees should be \"apidae\""
},
{
    name: "scientific",
    displayedName: "Scientific",
    type: "text"
}
];

const bees = [
    {
        name: "bee_name",
        displayedName: "Bee Name",
        type: "text"
    },
    {
        name: "dominant",
        displayedName: "Dominant Gene",
        type: "dropdown",
        options: ["false", "true"]
    },
    {
        name: "glowing",
        displayedName: "Glowing Texture",
        type: "dropdown",
        options: ["false", "true"]
    },
    {
        name: "bee_primarycolor",
        displayedName: "Primary Color",
        type: "color"
    },
    {
        name: "bee_secondarycolor",
        displayedName: "Secondary Color",
        type: "color"
    },
    {
        name: "secret",
        displayedName: "Secret",
        type: "dropdown",
        options: ["false", "true"],
        description: "Don't show up in NEI or creative"
    },
    {
        name: "humidity",
        displayedName: "Humidity",
        type: "dropdown",
        options: ["Arid", "Normal", "Damp"]
    },
    {
        name: "temperature",
        displayedName: "Temperature",
        type: "dropdown",
        options: ["Icy", "Cold", "Normal", "Warm", "Hot", "Hellish"]
    },
    {
        name: "nocturnal",
        displayedName: "Nocturnal",
        type: "dropdown",
        options: ["false", "true"],
        description: "Only work at night"
    },
    {
        name: "binominal",
        displayedName: "Binominal",
        type: "text",
        description: "Species name in portable analyzer"
    },
    {
        name: "authority",
        displayedName: "Authority",
        type: "text",
    },
    {
        name: "bee_branch",
        displayedName: "Branch",
        type: "text"
    },
    {
        name: "products",
        displayedName: "Normal Products",
        type: "textarea",
        description: "One per line. Example: 10% S:minecraft:diamond"
    },
    {
        name: "specialty",
        displayedName: "Special Products",
        type: "textarea",
        description: "One per line. Example: 10% S:gendustry:\"HoneyComb.test\""
    },
    {
        name: "base",
        displayedName: "Base specie",
        type: "text",
        defaultValue: "forestry.speciesForest",
        description: "Copy from alleles.dump"
    },
    {
        name: "bee_speed",
        displayedName: "Production speed",
        type: "dropdown",
        options: ["", "forestry.speedSlowest", "forestry.speedSlower", "forestry.speedSlow", "forestry.speedNormal", "forestry.speedFast", "forestry.speedFaster", "forestry.speedFastest", "magicbees.speedBlinding", "avaritia.speedNerfed"]
    },
    {
        name: "lifespan",
        displayedName: "Life span",
        type: "dropdown",
        options: ["", "forestry.lifespanShortest", "forestry.lifespanShorter", "forestry.lifespanShortened", "forestry.lifespanShort", "forestry.lifespanNormal", "forestry.lifespanLongest", "forestry.lifespanLonger", "forestry.lifespanLong", "forestry.lifespanElongated", "avaritia.lifespanArtificial"]
    },
    {
        name: "fertility",
        displayedName: "Fertility",
        type: "dropdown",
        options: ["", "forestry.fertilityLow", "forestry.fertilityNormal", "forestry.fertilityHigh", "forestry.fertilityMaximum"]
    },
    {
        name: "temperature_tolerance",
        displayedName: "Temperature Tolerance",
        type: "dropdown",
        options: ["", "forestry.toleranceNone", "forestry.toleranceBoth1", "forestry.toleranceBoth2", "forestry.toleranceBoth3", "forestry.toleranceBoth4", "forestry.toleranceBoth5", "forestry.toleranceDown1", "forestry.toleranceDown2", "forestry.toleranceDown3", "forestry.toleranceDown4", "forestry.toleranceDown5", "forestry.toleranceUp1", "forestry.toleranceUp2", "forestry.toleranceUp3", "forestry.toleranceUp4", "forestry.toleranceUp5"]
    },
    {
        name: "A_nocturnal",
        displayedName: "Nocturnal",
        type: "dropdown",
        options: ["", "forestry.boolFalse", "forestry.boolTrue"],
        description: "Only works at night"
    },
    {
        name: "humidity_tolerance",
        displayedName: "Humidity Tolerance",
        type: "dropdown",
        options: ["", "forestry.toleranceNone", "forestry.toleranceBoth1", "forestry.toleranceBoth2", "forestry.toleranceBoth3", "forestry.toleranceBoth4", "forestry.toleranceBoth5", "forestry.toleranceDown1", "forestry.toleranceDown2", "forestry.toleranceDown3", "forestry.toleranceDown4", "forestry.toleranceDown5", "forestry.toleranceUp1", "forestry.toleranceUp2", "forestry.toleranceUp3", "forestry.toleranceUp4", "forestry.toleranceUp5"]
    },
    {
        name: "tolerantFlyer",
        displayedName: "Rain Tolerance",
        type: "dropdown",
        options: ["", "forestry.boolFalse", "forestry.boolTrue"]
    },
    {
        name: "caveDwelling",
        displayedName: "Cave Dwelling",
        type: "dropdown",
        options: ["", "forestry.boolFalse", "forestry.boolTrue"],
        description: "Can work without seeing the sky"
    },
    {
        name: "flower_provider",
        displayedName: "Flower Type",
        type: "text",
        description: "Copy from alleles.dump"
    },
    {
        name: "flowering",
        displayedName: "Flowering Speed",
        type: "dropdown",
        options: ["", "forestry.floweringSlowest", "forestry.floweringSlower", "forestry.floweringSlow", "forestry.floweringAverage", "forestry.floweringFast", "forestry.floweringFaster", "forestry.floweringFastest", "forestry.floweringMaximum", "extratrees.species.floweringcrabapple"]
    },
    {
        name: "territory",
        displayedName: "Bee active area",
        type: "dropdown",
        options: ["", "forestry.territoryAverage", "forestry.territoryLarge", "forestry.territoryLarger", "forestry.territoryLargest"]
    },
    {
        name: "bee_effect",
        displayedName: "Bee Effect",
        type: "text",
        description: "Copy from alleles.dump"
    }
];

const mutations = [{
    name: "parent1",
    displayedName: "Parent 1",
    type: "text",
    description: "Copy from alleles.dump"
},
{
    name: "parent2",
    displayedName: "Parent 2",
    type: "text",
    description: "Copy from alleles.dump"
},
{
    name: "mutation_result",
    displayedName: "Mutation result",
    type: "text"
},
{
    name: "mutation_chance",
    displayedName: "Mutation chance",
    type: "number",
    min: "0",
    max: "100"
},
{
    name: "mutation_conditions",
    displayedName: "Mutation requirements",
    type: "dropdown",
    options: ["None", "Temperature", "Humidity", "Biome", "Block"],
    defaultValue: "Temperature"
},
];

const honeycombs = [{
    name: "honeycomb_name",
    displayedName: "Honeycomb Name",
    type: "text",
    description: "Example: golden"
},
{
    name: "honeycomb_damagevalue",
    displayedName: "Honeycomb Unique ID",
    type: "number"
},
{
    name: "honeycomb_primarycolor",
    displayedName: "Primary Color",
    type: "color"
},
{
    name: "honeycomb_secondarycolor",
    displayedName: "Secondary Color",
    type: "color"
}
];

const honeydrops = [{
    name: "honeydrop_name",
    displayedName: "Honeydrop Name",
    type: "text"
},
{
    name: "honeydrop_damagevalue",
    displayedName: "Honeydrop Unique ID",
    type: "number"
},
{
    name: "honeydrop_primarycolor",
    displayedName: "Primary Color",
    type: "color"
},
{
    name: "honeydrop_secondarycolor",
    displayedName: "Secondary Color",
    type: "color"
}
];

// const flowerallele = [{
//     name: "flowerallele_id",
//     type: "text"
// },
// {
//     name: "flowerallele_flowers",
//     type: "text",
//     description: "Copy from alleles.dump"
//     // type: "dropdown",
//     // options: ["flowers", "cacti", "wheat", "carrots", "potatoes", "nether_wart", "mushrooms"]
// }
// ];

// const recipes = [{
//     name: "input",
//     type: "text"
// },
// {
//     name: "output",
//     type: "text"
// },
// {
//     name: "time",
//     type: "slider",
//     min: 0,
//     max: 100,
//     step: 1
// }
// ];

// const hivegen = [{
//     name: "hivegen_id",
//     type: "text"
// },
// {
//     name: "hivegen_world",
//     type: "text"
// },
// {
//     name: "hivegen_biome",
//     type: "text"
// },
// {
//     name: "hivegen_chance",
//     type: "slider",
//     min: 0,
//     max: 1,
//     step: 0.05
// }
// ];


document.addEventListener("DOMContentLoaded", () => {
    createConfigForm();
    // updateMutationConditionsInput("None");
});

function createInputElement(param) {
    switch (param.type) {
        case "dropdown":
            return createDropdown(param.name, param.options);
        case "slider":
            return createSlider(param.name, param.min, param.max, param.step);
        case "color":
            return createColorPicker(param.name);
        case "text":
            return createTextInput(param);
        case "textarea":
            return createTextArea(param);
        case "number":
            return createNumberInput(param);
        default:
            return null;
    }
}

function createDropdown(name, options, defaultValue) {
    const dropdown = document.createElement("select");
    dropdown.id = name;

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        dropdown.appendChild(optionElement);
    });

    if (name === "mutation_conditions") {
        dropdown.addEventListener("change", (event) => {
            updateMutationConditionsInput(event.target.value);
        });
    }

    return dropdown;
}


function updateMutationConditionsInput(selectedOption) {
    const inputContainer = document.getElementById("mutation_conditions_input_container");
    inputContainer.innerHTML = "";

    if (selectedOption === "None") {
        return; // 条件なしの場合は入力フィールドを表示しない
    }

    const beforeText = document.createElement("span");
    beforeText.textContent = "Condition: ";
    inputContainer.appendChild(beforeText);

    if (selectedOption === "Biome" || selectedOption === "Block") {
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.id = `mutation_conditions_${selectedOption}`;
        inputContainer.appendChild(inputElement);

        if (selectedOption === "Block") {
            const afterText = document.createElement("span");
            afterText.textContent = " Example : B:wool@1, OD:blockGold";
            inputContainer.appendChild(afterText);
        }
    } else {
        const dropdownElement = document.createElement("select");
        dropdownElement.id = `mutation_conditions_${selectedOption}`;

        // Example options for the new dropdown based on selectedOption
        let newOptions;
        switch (selectedOption) {
            case "Temperature":
                newOptions = ["Icy", "Cold", "Normal", "Warm", "Hot", "Hellish"];
                break;
            case "Humidity":
                newOptions = ["Arid", "Normal", "Damp"];
                break;
        }

        newOptions.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.text = option;
            dropdownElement.appendChild(optionElement);
        });

        inputContainer.appendChild(dropdownElement);
    }
}

function createSlider(name, min, max, step) {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.id = name;
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = min;

    const valueDisplay = document.createElement("span");
    valueDisplay.id = `${name}-value`;
    valueDisplay.textContent = min;

    slider.oninput = () => {
        valueDisplay.textContent = slider.value;
    };

    const container = document.createElement("div");
    container.appendChild(slider);
    container.appendChild(valueDisplay);

    return container;
}

function createColorPicker(name) {
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = name;
    return colorPicker;
}

function createTextInput(param) {
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = param.name;
    // textInput.value = typeof defaultValue !== 'undefined' && defaultValue !== null ? defaultValue : "";
    textInput.value = param.defaultValue || "";
    return textInput;
}

function createTextArea(param) {
    const textArea = document.createElement("textarea");
    textArea.id = param.name;
    textArea.value = param.defaultValue || "";
    return textArea;
}

function createNumberInput(param) {
    const textInput = document.createElement("input");
    textInput.type = "number";
    textInput.id = param.name;
    param.min = param.min !== undefined ? param.min : textInput.min;
    param.max = param.max !== undefined ? param.max : textInput.max;
    return textInput;
}

function CreateDropsList(products) {
    console.log(products)
    if (products !== null && products !== undefined && products !== "") {
        const indentedProducts = products
            .split('\n')
            .map(line => '            ' + line)
            .join('\n');
        return `DropsList(\n${indentedProducts}\n        )`;
    } else {
        return "DropsList()";
    }
}



function createConfigForm() {
    const container = document.getElementById("config-container");
    container.innerHTML = "";

    const addSection = (title, params, generateFunctionName, outputId) => {
        const section = document.createElement("h2");
        section.textContent = title;
        container.appendChild(section);

        params.forEach(param => {
            const label = document.createElement("label");
            label.textContent = param.displayedName;
            label.htmlFor = param.name;

            const inputElement = createInputElement(param);

            const div = document.createElement("div");
            div.className = "config-item";
            div.appendChild(label);
            div.appendChild(inputElement);

            if (param.name === "mutation_conditions") {
                const inputContainer = document.createElement("div");
                inputContainer.id = "mutation_conditions_input_container";
                div.appendChild(inputContainer);
            }

            const description = document.createElement("span");
            description.textContent = param.description || "";
            description.textContent = " " + description.textContent;
            div.appendChild(description);

            container.appendChild(div);
        });

        const button = document.createElement("button");
        button.textContent = `Copy and Generate ${title} Config`;
        button.onclick = () => {
            window[generateFunctionName]();
            copyToClipboard(outputId);
        };
        container.appendChild(button);

        const pre = document.createElement("pre");
        pre.id = outputId;
        container.appendChild(pre);
    };

    addSection("Branches", branches, "generateBranchesConfig", "branches-output");
    addSection("Bees", bees, "generateBeesConfig", "bees-output");
    addSection("Mutations", mutations, "generateMutationsConfig", "mutations-output");
    addSection("HoneyCombs", honeycombs, "generateHoneycombsConfig", "honeycombs-output");
    addSection("HoneyDrops", honeydrops, "generateHoneydropsConfig", "honeydrops-output");
    // addSection("FlowerAllele", flowerallele, "generateFloweralleleConfig", "flowerallele-output");
    // addSection("Recipes", recipes, "generateRecipesConfig", "recipes-output");
    // addSection("HiveGen", hivegen, "generateHivegenConfig", "hivegen-output");

    // Add button for generating combined config
    // const combinedButton = document.createElement("button");
    // combinedButton.textContent = "全てのセクションの設定をテキストファイルとして出力";
    // combinedButton.onclick = generateCombinedConfig;
    // container.appendChild(combinedButton);
}

function copyToClipboard(outputId) {
    const outputElement = document.getElementById(outputId);
    const text = outputElement.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('クリップボードにコピーされました。');
    }).catch(err => {
        alert('クリップボードへのコピーに失敗しました。');
        console.error('コピーエラー:', err);
    });
}

function generateCombinedConfig() {
    const sections = ["branches-output", "bees-output", "mutations-output", "honeycombs-output", "honeydrops-output", "flowerallele-output", "recipes-output", "hivegen-output"];
    let combinedConfig = '';

    const blob = new Blob([combinedConfig], {
        type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'combined_config.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function getElementValue(element) {
    return document.getElementById(element).value;
}

function createConfigLine(label, value, format = "%s = %d") {
    console.log(value)
    return value && value !== "\"\"" ? `${format.replace("%s", "        " + label).replace("%d", value)}\n` : "";
}

function generateBranchesConfig() {
    const branchesConfig = `cfg Branches {
    cfg ${getElementValue('branch_name')} {
        UID = \"${getElementValue('branch_id')}\"
        Parent = ${getElementValue('branch_parent')}
        Scientific = ${getElementValue('scientific')}
    }
}`
    document.getElementById("branches-output").textContent = branchesConfig;
}

function generateBeesConfig() {
    const beeName = getElementValue('bee_name');
    const productsDropList = CreateDropsList(getElementValue('products'));
    const specialtyDropList = CreateDropsList(getElementValue('specialty'));
    const primaryColor = getElementValue('bee_primarycolor').replace(/#/g, '0x');
    const secondaryColor = getElementValue('bee_secondarycolor').replace(/#/g, '0x');

    let beesConfig = `cfg Bees {\n`;
    beesConfig += `    cfg ${beeName} {\n`;
    beesConfig += createConfigLine('Dominant', getElementValue('dominant'));
    beesConfig += createConfigLine('Glowing', getElementValue('glowing'));
    beesConfig += createConfigLine('PrimaryColor', primaryColor);
    beesConfig += createConfigLine('SecondaryColor', secondaryColor);
    beesConfig += createConfigLine('Secret', getElementValue('secret'));
    beesConfig += createConfigLine('Humidity', getElementValue('humidity'));
    beesConfig += createConfigLine('Temperature', getElementValue('temperature'));
    beesConfig += createConfigLine('Nocturnal', getElementValue('nocturnal'));
    beesConfig += createConfigLine('Binominal', getElementValue('binominal'));
    beesConfig += createConfigLine('Authority', getElementValue('authority'));
    beesConfig += createConfigLine('Branch', `"${getElementValue('bee_branch')}"`);
    beesConfig += createConfigLine('Products', productsDropList);
    beesConfig += createConfigLine('Specialty', specialtyDropList);

    beesConfig += "\n";
    beesConfig += `        cfg Traits {\n`;
    beesConfig += createConfigLine('    Base', `"${getElementValue('base')}"`);
    beesConfig += createConfigLine('    Speed', `"${getElementValue('bee_speed')}"`);
    beesConfig += createConfigLine('    Lifespan', `"${getElementValue('lifespan')}"`);
    beesConfig += createConfigLine('    Fertility', `"${getElementValue('fertility')}"`);
    beesConfig += createConfigLine('    Temperature_Tolerance', `"${getElementValue('temperature_tolerance')}"`);
    beesConfig += createConfigLine('    Nocturnal', `"${getElementValue('A_nocturnal')}"`);
    beesConfig += createConfigLine('    Humidity_Tolerance', `"${getElementValue('humidity_tolerance')}"`);
    beesConfig += createConfigLine('    Tolerant_Flyer', `"${getElementValue('tolerantFlyer')}"`);
    beesConfig += createConfigLine('    Cave_Dwelling', `"${getElementValue('caveDwelling')}"`);
    beesConfig += createConfigLine('    Flower_Provider', `"${getElementValue('flower_provider')}"`);
    beesConfig += createConfigLine('    Flowering', `"${getElementValue('flowering')}"`);
    beesConfig += createConfigLine('    Territory', `"${getElementValue('territory')}"`);
    beesConfig += createConfigLine('    Effect', `"${getElementValue('bee_effect')}"`);
    beesConfig += `        }\n    }\n}`;

    beesConfig += "\n\n";
    beesConfig += `gendustry.bees.species.${beeName} = ${beeName}`
    document.getElementById("bees-output").textContent = beesConfig;
}


function generateMutationsConfig() {
    const selectedCondition = getElementValue('mutation_conditions');
    let mutationCondition = "";
    if (selectedCondition !== "None") {
        mutationCondition = "Req " + selectedCondition + " " + getElementValue(`mutation_conditions_${selectedCondition}`);
    }

    const mutationsConfig = `recipes {
    mutation: ${getElementValue('mutation_chance')}% \
"${getElementValue('parent1')}" + \
"${getElementValue('parent2')}" => \
"${getElementValue('mutation_result')}" \
${mutationCondition}
}`;

    document.getElementById("mutations-output").textContent = mutationsConfig;
}


function generateHoneycombsConfig() {
    const honeycombsConfig = `cfg HoneyCombs {
    cfg ${getElementValue('honeycomb_name')} {
        ID = ${getElementValue('honeycomb_damagevalue')}
        PrimaryColor = ${getElementValue('honeycomb_primarycolor').replace(/#/g, '0x')}
        SecondaryColor = ${getElementValue('honeycomb_secondarycolor').replace(/#/g, '0x')}
    }
}

gendustry.honeycomb.${getElementValue('honeycomb_name')}.name = ${getElementValue('honeycomb_name')} Comb`;
    document.getElementById("honeycombs-output").textContent = honeycombsConfig;
}


function generateHoneydropsConfig() {
    const honeydropsConfig = `cfg HoneyDrops {
    cfg ${getElementValue('honeydrop_name')} {
        ID = ${getElementValue('honeydrop_damagevalue')}
        PrimaryColor = ${getElementValue('honeydrop_primarycolor').replace(/#/g, '0x')}
        SecondaryColor = ${getElementValue('honeydrop_secondarycolor').replace(/#/g, '0x')}
    }
}
    
gendustry.honeydrop.${getElementValue('honeydrop_name')}.name = ${getElementValue('honeydrop_name')} Honey Drop`;
    document.getElementById("honeydrops-output").textContent = honeydropsConfig;
}


// function generateFloweralleleConfig() {
//     const floweralleleConfig = `cfg flowerallele {
//         ${getElementValue('flowerallele_id')} {
//             id = ${getElementValue('flowerallele_id')}
//             flowers = ${getElementValue('flowerallele_flowers')}
//         }
//     }`;
//     document.getElementById("flowerallele-output").textContent = floweralleleConfig;
// }

// function generateRecipesConfig() {
//     const recipesConfig = `cfg recipes {
//         ${getElementValue('input')}_${getElementValue('output')} {
//             input = ${getElementValue('input')}
//             output = ${getElementValue('output')}
//             time = ${getElementValue('time')}
//         }
//     }`;
//     document.getElementById("recipes-output").textContent = recipesConfig;
// }

// function generateHivegenConfig() {
//     const hivegenConfig = `cfg hivegen {
//         ${getElementValue('hivegen_id')} {
//             id = ${getElementValue('hivegen_id')}
//             world = ${getElementValue('hivegen_world')}
//             biome = ${getElementValue('hivegen_biome')}
//             chance = ${getElementValue('hivegen_chance')}
//         }
//     }`;
//     document.getElementById("hivegen-output").textContent = hivegenConfig;
// }

// document.addEventListener("DOMContentLoaded", createConfigForm);
