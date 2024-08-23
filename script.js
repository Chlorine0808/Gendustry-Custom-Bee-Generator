const branch = {
    branch_name: {
        name: "branch_name",
        displayedName: "Branch Name",
        type: "text",
        placeholder: "lunch"
    },
    branch_id: {
        name: "branch_id",
        displayedName: "Branch Unique ID",
        type: "text",
        placeholder: "gendustry.lunch"
    },
    branch_parent: {
        name: "branch_parent",
        displayedName: "Parent",
        type: "text",
        default: "apidae",
        placeholder: "apidae",
        description: "For bees should be \"apidae\""
    },
    scientific: {
        name: "scientific",
        displayedName: "Scientific",
        type: "text",
        placeholder: "luncheon"
    }
};

const bee = {
    bee_name: {
        name: "bee_name",
        displayedName: "Bee Name",
        type: "text",
        default: "babee",
        placeholder: "babee"
    },
    dominant: {
        name: "dominant",
        configName: "Dominant",
        displayedName: "Dominant Gene ?",
        type: "checkbox"
    },
    glowing: {
        name: "glowing",
        configName: "Glowing",
        displayedName: "Glowing Texture ?",
        type: "checkbox",
        description: "Has glowing texture"
    },
    bee_primarycolor: {
        name: "bee_primarycolor",
        configName: "PrimaryColor",
        displayedName: "Primary Color",
        type: "color"
    },
    bee_secondarycolor: {
        name: "bee_secondarycolor",
        configName: "SecondaryColor",
        displayedName: "Secondary Color",
        type: "color"
    },
    secret: {
        name: "secret",
        configName: "Secret",
        displayedName: "Secret",
        type: "checkbox",
        description: "Don't show up in NEI or creative"
    },
    humidity: {
        name: "humidity",
        configName: "Humidity",
        displayedName: "Humidity",
        type: "dropdown",
        options: ["Arid", "Normal", "Damp"]
    },
    temperature: {
        name: "temperature",
        configName: "Temperature",
        displayedName: "Temperature",
        type: "dropdown",
        options: ["Icy", "Cold", "Normal", "Warm", "Hot", "Hellish"]
    },
    nocturnal: {
        name: "nocturnal",
        configName: "Nocturnal",
        displayedName: "Nocturnal",
        type: "checkbox",
        description: "Only work at night"
    },
    binominal: {
        name: "binominal",
        configName: "Binominal",
        displayedName: "Binominal",
        type: "text",
        placeholder: "Babee",
        description: "Species name in portable analyzer"
    },
    authority: {
        name: "authority",
        configName: "Authority",
        displayedName: "Authority",
        type: "text",
        placeholder: "Chlorine"
    },
    bee_branch: {
        name: "bee_branch",
        configName: "Branch",
        displayedName: "Branch",
        type: "text",
        placeholder: "gendustry.lunch"
    },
    products: {
        name: "products",
        configName: "Products",
        displayedName: "Normal Products",
        type: "droplist",
    },
    specialty: {
        name: "specialty",
        configName: "Specialty",
        displayedName: "Special Products",
        type: "droplist",
    },
    base: {
        name: "base",
        configName: "Base",
        displayedName: "Base specie",
        type: "text",
        default: "forestry.speciesForest",
        placeholder: "forestry.speciesForest",
        description: "Copy from alleles.dump"
    },
    bee_speed: {
        name: "bee_speed",
        configName: "Speed",
        displayedName: "Production speed",
        type: "dropdown",
        options: ["", "forestry.speedSlowest", "forestry.speedSlower", "forestry.speedSlow", "forestry.speedNormal", "forestry.speedFast", "forestry.speedFaster", "forestry.speedFastest", "magicbees.speedBlinding", "avaritia.speedNerfed"]
    },
    lifespan: {
        name: "lifespan",
        configName: "Lifespan",
        displayedName: "Life span",
        type: "dropdown",
        options: ["", "forestry.lifespanShortest", "forestry.lifespanShorter", "forestry.lifespanShort", "forestry.lifespanShortened", "forestry.lifespanNormal", "forestry.lifespanElongated", "forestry.lifespanLong", "forestry.lifespanLonger", "forestry.lifespanLongest", "avaritia.lifespanArtificial"]
    },
    fertility: {
        name: "fertility",
        configName: "Fertility",
        displayedName: "Fertility",
        type: "dropdown",
        options: ["", "forestry.fertilityLow", "forestry.fertilityNormal", "forestry.fertilityHigh", "forestry.fertilityMaximum"]
    },
    temperature_tolerance: {
        name: "temperature_tolerance",
        configName: "Temperature_Tolerance",
        displayedName: "Temperature Tolerance",
        type: "dropdown",
        options: ["", "forestry.toleranceNone", "forestry.toleranceBoth1", "forestry.toleranceBoth2", "forestry.toleranceBoth3", "forestry.toleranceBoth4", "forestry.toleranceBoth5", "forestry.toleranceDown1", "forestry.toleranceDown2", "forestry.toleranceDown3", "forestry.toleranceDown4", "forestry.toleranceDown5", "forestry.toleranceUp1", "forestry.toleranceUp2", "forestry.toleranceUp3", "forestry.toleranceUp4", "forestry.toleranceUp5"]
    },
    A_nocturnal: {
        name: "A_nocturnal",
        configName: "Nocturnal",
        displayedName: "Nocturnal",
        type: "dropdown",
        options: ["", "forestry.boolFalse", "forestry.boolTrue"],
        description: "Only works at night"
    },
    humidity_tolerance: {
        name: "humidity_tolerance",
        configName: "Humidity_Tolerance",
        displayedName: "Humidity Tolerance",
        type: "dropdown",
        options: ["", "forestry.toleranceNone", "forestry.toleranceBoth1", "forestry.toleranceBoth2", "forestry.toleranceBoth3", "forestry.toleranceBoth4", "forestry.toleranceBoth5", "forestry.toleranceDown1", "forestry.toleranceDown2", "forestry.toleranceDown3", "forestry.toleranceDown4", "forestry.toleranceDown5", "forestry.toleranceUp1", "forestry.toleranceUp2", "forestry.toleranceUp3", "forestry.toleranceUp4", "forestry.toleranceUp5"]
    },
    tolerantFlyer: {
        name: "tolerant_flyer",
        configName: "Tolerant_Flyer",
        displayedName: "Rain Tolerance",
        type: "dropdown",
        options: ["", "forestry.boolFalse", "forestry.boolTrue"]
    },
    caveDwelling: {
        name: "cave_dwelling",
        configName: "Cave_Dwelling",
        displayedName: "Cave Dwelling",
        type: "dropdown",
        options: ["", "forestry.boolFalse", "forestry.boolTrue"],
        description: "Can work without seeing the sky"
    },
    flower_provider: {
        name: "flower_provider",
        configName: "Flower_Provider",
        displayedName: "Flower Type",
        type: "text",
        description: "Copy from alleles.dump"
    },
    flowering: {
        name: "flowering",
        configName: "Flowering",
        displayedName: "Flowering Speed",
        type: "dropdown",
        options: ["", "forestry.floweringSlowest", "forestry.floweringSlower", "forestry.floweringSlow", "forestry.floweringAverage", "forestry.floweringFast", "forestry.floweringFaster", "forestry.floweringFastest", "forestry.floweringMaximum"]
    },
    territory: {
        name: "territory",
        configName: "Territory",
        displayedName: "Bee active area",
        type: "dropdown",
        options: ["", "forestry.territoryAverage", "forestry.territoryLarge", "forestry.territoryLarger", "forestry.territoryLargest"]
    },
    bee_effect: {
        name: "bee_effect",
        configName: "Effect",
        displayedName: "Bee Effect",
        type: "text",
        placeholder: "forestry.effectNone",
        description: "Copy from alleles.dump"
    }
};

const mutation = {
    parent1: {
        name: "parent1",
        displayedName: "Parent 1",
        type: "text",
        description: "Copy from alleles.dump"
    },
    parent2: {
        name: "parent2",
        displayedName: "Parent 2",
        type: "text",
        description: "Copy from alleles.dump"
    },
    mutation_result: {
        name: "mutation_result",
        displayedName: "Mutation result",
        type: "text"
    },
    mutation_chance: {
        name: "mutation_chance",
        displayedName: "Mutation chance",
        type: "number",
        min: "0",
        max: "100"
    },
    mutation_conditions: {
        name: "mutation_conditions",
        displayedName: "Mutation requirements",
        type: "dropdown",
        options: ["None", "Temperature", "Humidity", "Biome", "Block"],
        default: "Temperature"
    }
};

const honeycomb = {
    honeycomb_name: {
        name: "honeycomb_name",
        displayedName: "Honeycomb Name",
        type: "text",
        description: "Example: golden"
    },
    honeycomb_damagevalue: {
        name: "honeycomb_damagevalue",
        displayedName: "Honeycomb Unique ID",
        type: "number"
    },
    honeycomb_primarycolor: {
        name: "honeycomb_primarycolor",
        displayedName: "Primary Color",
        type: "color"
    },
    honeycomb_secondarycolor: {
        name: "honeycomb_secondarycolor",
        displayedName: "Secondary Color",
        type: "color"
    }
};

const honeydrop = {
    honeydrop_name: {
        name: "honeydrop_name",
        displayedName: "Honeydrop Name",
        type: "text"
    },
    honeydrop_damagevalue: {
        name: "honeydrop_damagevalue",
        displayedName: "Honeydrop Unique ID",
        type: "number"
    },
    honeydrop_primarycolor: {
        name: "honeydrop_primarycolor",
        displayedName: "Primary Color",
        type: "color"
    },
    honeydrop_secondarycolor: {
        name: "honeydrop_secondarycolor",
        displayedName: "Secondary Color",
        type: "color"
    }
};



document.addEventListener("DOMContentLoaded", generateForm);

function generateForm() {
    const branchForm = document.getElementById('branchForm');
    createForm(branch, branchForm, 'branchText', 'generateBranchConfig');
    const beeForm = document.getElementById('beeForm');
    createForm(bee, beeForm, 'beeText', 'generateBeeConfig');
    const mutationForm = document.getElementById('mutationForm');
    createForm(mutation, mutationForm, 'mutationText', 'generateMutationConfig');
    const honeycombForm = document.getElementById('honeycombForm');
    createForm(honeycomb, honeycombForm, 'honeycombText', 'generateHoneycombConfig');
    const honeydropForm = document.getElementById('honeydropForm');
    createForm(honeydrop, honeydropForm, 'honeydropText', 'generateHoneydropConfig');
}

function createForm(config, form, outputId, configGenerator) {
    for (const key in config) {
        const cfg = config[key];
        createFormElement(cfg, form);
    }

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Generate Config';
    button.setAttribute('onclick', `${configGenerator}('${outputId}')`);
    form.appendChild(button);
}

function createFormElement(cfg, form) {
    const label = document.createElement('label');
    label.setAttribute('for', cfg.name);
    label.textContent = cfg.displayedName + ": ";
    form.appendChild(label);

    let input = createInput(cfg);
    input.setAttribute('id', cfg.name);
    input.setAttribute('name', cfg.name);
    if (cfg.required !== false) input.required = true;
    form.appendChild(input);

    if (cfg.name === 'mutation_conditions') {
        input.addEventListener('change', function () {
            updateMutationConditionsInput(this.value);
        });
        const conditionsInput = document.createElement('div');
        conditionsInput.id = 'mutation_conditions_input';
        form.appendChild(conditionsInput);
    }

    if (cfg.description) {
        const description = document.createElement('span');
        description.textContent = " " + cfg.description;
        form.appendChild(description);
    }

    const br = document.createElement('br');
    form.appendChild(br);
}

function createInput(param) {
    let input;
    switch (param.type) {
        case "dropdown":
            input = document.createElement("select");
            input.id = param.name;

            param.options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.text = option;
                input.appendChild(optionElement);
            });
            break;
        case "textarea":
            input = document.createElement("textarea");
            input.id = param.name;
            break;
        case "droplist":
            input = createSpecialInput(param.name, "droplist");
            break;
        default:
            input = document.createElement("input");
            input.type = param.type;
            input.id = param.name;
            if (param.default !== undefined) input.value = param.default;
            if (param.min !== undefined) input.min = param.min;
            if (param.max !== undefined) input.max = param.max;
            if (param.placeholder !== undefined) input.placeholder = param.placeholder;
            break;
    }
    return input;
}

function updateMutationConditionsInput(selectedOption) {
    const inputContainer = document.getElementById("mutation_conditions_input");
    inputContainer.innerHTML = "";

    if (selectedOption === "None") {
        return;
    }

    addMutationConditionsInput(inputContainer, selectedOption);
}

function addMutationConditionsInput(container, selectedOption) {
    const beforeText = document.createElement("span");
    beforeText.textContent = "Condition: ";
    container.appendChild(beforeText);

    if (selectedOption === "Biome" || selectedOption === "Block") {
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.id = `mutation_conditions_${selectedOption}`;
        container.appendChild(inputElement);

        if (selectedOption === "Block") {
            const afterText = document.createElement("span");
            afterText.textContent = " Example : B:wool@1, OD:blockGold";
            container.appendChild(afterText);
        }
    } else {
        const dropdownElement = document.createElement("select");
        dropdownElement.id = `mutation_conditions_${selectedOption}`;

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

        container.appendChild(dropdownElement);
    }
}

function createSpecialInput(name, type) {
    const container = document.createElement('div');
    container.setAttribute('id', name);

    const addButton = document.createElement('button');
    addButton.setAttribute('type', 'button');
    addButton.textContent = 'Add Drops';
    addButton.onclick = () => addSpecialInput(container, type);
    container.appendChild(addButton);

    return container;
}

function addSpecialInput(container, type) {
    const newContainer = document.createElement('div');
    var formElements = [];

    if (type === "droplist") {
        formElements = [
            { name: 'item', displayedName: 'item', type: 'text', placeholder: 'minecraft:iron_ingot' },
            { name: 'meta', displayedName: 'meta', type: 'number', placeholder: '0' },
            { name: 'chance', displayedName: 'chance', type: 'number', placeholder: '10', min: "0", max: "100" }
        ];
    }

    formElements.forEach(elementConfig => {
        createFormElement(elementConfig, newContainer);
    });

    container.appendChild(newContainer);
}

function getDropList(container) {
    const dropData = [];
    const resultData = [];
    const dropInputs = container.querySelectorAll('div');
    dropInputs.forEach(dropInput => {
        const item = dropInput.querySelector('input[id="item"]').value;
        const meta = dropInput.querySelector('input[id="meta"]').value;
        const chance = dropInput.querySelector('input[id="chance"]').value;
        if (item && chance) {
            const data = `${chance}% S:${item}`;
            if (meta) data += (`@${meta}`);
            dropData.push(data);
        }
    });
    if (dropData.length > 0) {
        resultData.push(`DropsList(`);
        resultData.push(`            ${dropData.join('\n')}`);
        resultData.push(`        )`);
    } else {
        resultData.push(`DropsList()`)
    }
    return resultData.join('\n');
}

function getElementValue(element) {
    return document.getElementById(element).value;
}

function createConfigLine(label, value, format = "%s = %d") {
    if (value === undefined || value === "false") {
        return "";
    }
    return value && value !== "\"\"" ? `${format.replace("%s", "        " + label).replace("%d", value)}\n` : "";
}

function generateBranchConfig() {
    const branchesConfig = `cfg Branches {
    cfg ${getElementValue('branch_name')} {
        UID = \"${getElementValue('branch_id')}\"
        Parent = ${getElementValue('branch_parent')}
        Scientific = ${getElementValue('scientific')}
    }
}`
    document.getElementById("branchConfig").textContent = branchesConfig;
}

function generateBeeConfig() {
    let beesConfig = `cfg Bees {\n    cfg ${getElementValue('bee_name')} {\n`;
    let isTrait = false;
    for (const key in bee) {
        const cfg = bee[key];
        if (cfg.name === "bee_name") {
            continue;
        }
        if (!isTrait) {
            if (cfg.type === 'color') {
                beesConfig += createConfigLine(cfg.configName, getElementValue(cfg.name).replace(/#/g, '0x'));
            } else if (cfg.type === 'dropdown' || cfg.type === 'textarea') {
                beesConfig += createConfigLine(cfg.configName, getElementValue(cfg.name));
            } else if (cfg.type === 'droplist') {
                beesConfig += createConfigLine(cfg.configName, getDropList(document.getElementById(cfg.name)));
            } else if (cfg.type === 'checkbox') {
                beesConfig += createConfigLine(cfg.configName, document.getElementById(cfg.name).checked);
            } else {
                beesConfig += createConfigLine(cfg.configName, getElementValue(cfg.name));
            }
            if (cfg.name === "specialty") {
                isTrait = true;
                beesConfig += `        cfg Traits {\n`;
            }
        } else {
            if (cfg.type === 'dropdown') {
                beesConfig += createConfigLine(`    ${cfg.configName.replace(/ /g, '_')}`, `"${getElementValue(cfg.name)}"`);
            } else {
                beesConfig += createConfigLine(`    ${cfg.configName}`, `"${getElementValue(cfg.name)}"`);
            }
        }
    }

    beesConfig += `    }\n}`;
    beesConfig += `\n\ngendustry.bees.species.${getElementValue('bee_name')} = ${getElementValue('bee_name')}`;
    document.getElementById("beeConfig").textContent = beesConfig;
}

function generateMutationConfig() {
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

    document.getElementById("mutationConfig").textContent = mutationsConfig;
}

function generateHoneycombConfig() {
    const honeycombsConfig = `cfg HoneyCombs {
    cfg ${getElementValue('honeycomb_name')} {
        ID = ${getElementValue('honeycomb_damagevalue')}
        PrimaryColor = ${getElementValue('honeycomb_primarycolor').replace(/#/g, '0x')}
        SecondaryColor = ${getElementValue('honeycomb_secondarycolor').replace(/#/g, '0x')}
    }
}

gendustry.honeycomb.${getElementValue('honeycomb_name')}.name = ${getElementValue('honeycomb_name')} Comb`;
    document.getElementById("honeycombConfig").textContent = honeycombsConfig;
}

function generateHoneydropConfig() {
    const honeydropsConfig = `cfg HoneyDrops {
    cfg ${getElementValue('honeydrop_name')} {
        ID = ${getElementValue('honeydrop_damagevalue')}
        PrimaryColor = ${getElementValue('honeydrop_primarycolor').replace(/#/g, '0x')}
        SecondaryColor = ${getElementValue('honeydrop_secondarycolor').replace(/#/g, '0x')}
    }
}
    
gendustry.honeydrop.${getElementValue('honeydrop_name')}.name = ${getElementValue('honeydrop_name')} Honey Drop`;
    document.getElementById("honeydropConfig").textContent = honeydropsConfig;
}
