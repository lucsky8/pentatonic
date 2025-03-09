const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const strings = ['E', 'B', 'G', 'D', 'A', 'E'];

// Les positions standard pour la gamme pentatonique mineure en La (A)
const minorPentatonicPositions = [
    // Position 1 (A mineur)
    [
        [5, 8, null, null],    // E string (high) - A, C
        [5, 8, null, null],    // B string - E, G
        [5, 7, null, null],    // G string - C, D
        [5, 7, null, null],    // D string - G, A
        [5, 7, null, null],    // A string - D, E
        [5, 8, null, null]     // E string (low) - A, C
    ],
    // Position 2
    [
        [8, 10, null, null],   // E string (high) - C, D
        [8, 10, null, null],   // B string - G, A
        [7, 9, null, null],    // G string - D, E
        [7, 10, null, null],   // D string - A, C
        [7, 10, null, null],   // A string - E, G
        [8, 10, null, null]    // E string (low) - C, D
    ],
    // Position 3
    [
        [10, 12, null, null],  // E string (high) - D, E
        [10, 12, null, null],  // B string - A, C
        [9, 12, null, null],   // G string - E, G
        [10, 12, null, null],  // D string - C, D
        [10, 12, null, null],  // A string - G, A
        [10, 12, null, null]   // E string (low) - D, E
    ],
    // Position 4
    [
        [12, 15, null, null],  // E string (high) - E, G
        [12, 15, null, null],  // B string - C, D
        [12, 14, null, null],  // G string - G, A
        [12, 14, null, null],  // D string - D, E
        [12, 15, null, null],  // A string - A, C
        [12, 15, null, null]   // E string (low) - E, G
    ],
    // Position 5
    [
        [15, 17, null, null],  // E string (high) - G, A
        [15, 17, null, null],  // B string - D, E
        [14, 17, null, null],  // G string - A, C
        [14, 17, null, null],  // D string - E, G
        [15, 17, null, null],  // A string - C, D
        [15, 17, null, null]   // E string (low) - G, A
    ]
];

// Positions standard pour la gamme pentatonique majeure en La (A)
const majorPentatonicPositions = [
    // Position 1
    [
        [5, 7, null, null],    // E string (high) - A, B
        [5, 7, null, null],    // B string - E, F#
        [4, 6, null, null],    // G string - B, C#
        [4, 7, null, null],    // D string - F#, A
        [4, 7, null, null],    // A string - C#, E
        [5, 7, null, null]     // E string (low) - A, B
    ],
    // Position 2 (corrected)
    [
        [8, 9, null, null],    // E string (high) - C#, E
        [7, 10, null, null],   // B string - F#, A
        [6, 9, null, null],    // G string - C#, E
        [7, 9, null, null],    // D string - A, B
        [7, 9, null, null],    // A string - E, F#
        [8, 9, null, null]     // E string (low) - C#, E
    ],
    // Position 3 (corrected)
    [
        [11, 12, null, null],  // E string (high) - E, F#
        [9, 12, null, null],   // B string - F#, A
        [9, 11, null, null],   // G string - E, F#
        [9, 11, null, null],   // D string - B, C#
        [9, 12, null, null],   // A string - F#, A
        [11, 12, null, null]   // E string (low) - E, F#
    ],
    // Position 4
    [
        [12, 14, null, null],  // E string (high) - E, F#
        [12, 14, null, null],  // B string - B, C#
        [11, 14, null, null],  // G string - F#, A
        [11, 14, null, null],  // D string - C#, E
        [12, 14, null, null],  // A string - A, B
        [12, 14, null, null]   // E string (low) - E, F#
    ],
    // Position 5
    [
        [17, 19, null, null],  // E string (high) - A, B
        [17, 19, null, null],  // B string - E, F#
        [16, 18, null, null],  // G string - B, C#
        [16, 18, null, null],  // D string - F#, A
        [17, 19, null, null],  // A string - E, F#
        [17, 19, null, null]   // E string (low) - A, B
    ]
];

const gMinorPentatonicPositions = [
    // Position 1 (G minor)
    [
        [3, 6, null, null],    // E string (high) - G, A#
        [3, 6, null, null],    // B string - D, F
        [3, 5, null, null],    // G string - A#, C
        [3, 5, null, null],    // D string - F, G
        [3, 5, null, null],    // A string - C, D
        [3, 6, null, null]     // E string (low) - G, A#
    ],
    // Position 2
    [
        [6, 8, null, null],    // E string (high) - A#, C
        [6, 8, null, null],    // B string - F, G
        [5, 7, null, null],    // G string - C, D
        [5, 8, null, null],    // D string - G, A#
        [5, 8, null, null],    // A string - D, F
        [6, 8, null, null]     // E string (low) - A#, C
    ],
    // Position 3
    [
        [8, 10, null, null],   // E string (high) - C, D
        [8, 10, null, null],   // B string - G, A#
        [7, 10, null, null],   // G string - D, F
        [8, 10, null, null],   // D string - A#, C
        [8, 10, null, null],   // A string - F, G
        [8, 10, null, null]    // E string (low) - C, D
    ],
    // Position 4
    [
        [10, 13, null, null],  // E string (high) - D, F
        [10, 13, null, null],  // B string - A#, C
        [10, 12, null, null],  // G string - F, G
        [10, 12, null, null],  // D string - C, D
        [10, 13, null, null],  // A string - G, A#
        [10, 13, null, null]   // E string (low) - D, F
    ],
    // Position 5
    [
        [13, 15, null, null],  // E string (high) - F, G
        [13, 15, null, null],  // B string - C, D
        [12, 15, null, null],  // G string - G, A#
        [12, 15, null, null],  // D string - D, F
        [13, 15, null, null],  // A string - A#, C
        [13, 15, null, null]   // E string (low) - F, G
    ]
];

// Ajout des positions pour les gammes diatoniques majeures (C majeur comme référence)
const majorDiatonicPositions = [
    // Position 1 (C majeur - forme C)
    [
        [0, 1, 3, null],     // E string (high) - E, F, G
        [0, 1, 3, null],     // B string - B, C, D
        [0, 2, null, null],  // G string - G, A
        [0, 2, null, null],  // D string - D, E
        [1, 3, null, null],  // A string - A, B, C
        [0, 1, 3, null]      // E string (low) - E, F, G
    ],
    // Position 2 (forme A)
    [
        [3, 5, 7, null],     // E string (high) - G, A, B
        [3, 5, 6, null],     // B string - D, E, F
        [2, 4, 5, null],     // G string - A, B, C
        [2, 4, 5, null],     // D string - E, F, G
        [3, 5, null, null],  // A string - C, D
        [3, 5, 7, null]      // E string (low) - G, A, B
    ],
    // Position 3 (forme G)
    [
        [7, 8, 10, null],    // E string (high) - B, C, D
        [6, 8, 10, null],    // B string - F, G, A
        [5, 7, 9, null],     // G string - C, D, E
        [5, 7, 9, null],     // D string - G, A, B
        [5, 7, 8, null],     // A string - D, E, F
        [7, 8, 10, null]     // E string (low) - B, C, D
    ],
    // Position 4 (forme E)
    [
        [10, 12, 13, null],  // E string (high) - D, E, F
        [10, 12, 13, null],  // B string - A, B, C
        [9, 10, 12, null],   // G string - E, F, G
        [9, 10, 12, null],   // D string - B, C, D
        [8, 10, 12, null],   // A string - F, G, A
        [10, 12, 13, null]   // E string (low) - D, E, F
    ],
    // Position 5 (forme D)
    [
        [13, 15, 17, null],  // E string (high) - F, G, A
        [13, 15, 17, null],  // B string - C, D, E
        [12, 14, 16, null],  // G string - G, A, B
        [12, 14, 15, null],  // D string - D, E, F
        [12, 13, 15, null],  // A string - A, B, C
        [13, 15, 17, null]   // E string (low) - F, G, A
    ]
];

// Positions pour gamme mineure naturelle (G mineur comme référence)
const minorDiatonicPositions = [
    // Position 1 (forme Gm)
    [
        [3, 5, 6, 8],     // E string (high) - G, A, Bb, C
        [3, 5, 6, 8],     // B string - D, Eb, F, G
        [3, 5, 6, 8],     // G string - G, A, Bb, C
        [3, 5, 6, 8],     // D string - D, Eb, F, G
        [3, 5, 6, 8],     // A string - G, A, Bb, C
        [3, 5, 6, 8]      // E string (low) - G, A, Bb, C
    ],
    // Position 2 (forme Em)
    [
        [8, 10, 11, 13],  // E string (high) - C, D, Eb, F
        [8, 10, 11, 13],  // B string - G, A, Bb, C
        [6, 8, 10, 11],   // G string - F, G, A, Bb
        [6, 8, 10, 11],   // D string - G, A, Bb, C
        [6, 8, 10, 11],   // A string - D, Eb, F, G
        [8, 10, 11, 13]   // E string (low) - C, D, Eb, F
    ],
    // Position 3 (forme Dm)
    [
        [10, 12, 13, 15], // E string (high) - Eb, F, G, A
        [10, 12, 13, 15], // B string - Bb, C, D, Eb
        [8, 10, 11, 13],  // G string - C, D, Eb, F
        [8, 10, 11, 13],  // D string - G, A, Bb, C
        [8, 10, 11, 13],  // A string - D, Eb, F, G
        [10, 12, 13, 15]  // E string (low) - Eb, F, G, A
    ],
    // Position 4 (forme Cm)
    [
        [13, 15, 17, 18],  // E string (high) - F, G, A, Bb
        [13, 15, 17, 18],  // B string - C, D, Eb, F
        [11, 13, 15, 17],  // G string - Eb, F, G, A
        [11, 13, 15, 17],  // D string - Bb, C, D, Eb
        [11, 13, 15, 17],  // A string - F, G, A, Bb
        [13, 15, 17, 18]   // E string (low) - F, G, A, Bb
    ],
    // Position 5 (forme Gm - octave higher)
    [
        [15, 17, 18, 20],  // E string (high) - G, A, Bb, C
        [15, 17, 18, 20],  // B string - D, Eb, F, G
        [15, 17, 18, 20],  // G string - G, A, Bb, C
        [15, 17, 18, 20],  // D string - D, Eb, F, G
        [15, 17, 18, 20],  // A string - G, A, Bb, C
        [15, 17, 18, 20]   // E string (low) - G, A, Bb, C
    ]
];

// Ajout des positions pour les arpèges majeurs (A majeur comme référence)
const majorArpeggioPositions = [
    // Position 1 (A majeur)
    [
        [5, null, null, null],    // E string (high) - A
        [5, null, null, null],    // B string - E
        [6, null, null, null],    // G string - C#
        [7, null, null, null],    // D string - A
        [7, null, null, null],    // A string - E
        [5, null, null, null]     // E string (low) - A
    ],
    // Position 2
    [
        [9, null, null, null],    // E string (high) - C#
        [9, null, null, null],    // B string - G#
        [9, null, null, null],    // G string - E
        [11, null, null, null],   // D string - C#
        [12, null, null, null],   // A string - A
        [9, null, null, null]     // E string (low) - C#
    ],
    // Position 3
    [
        [12, null, null, null],   // E string (high) - E
        [12, null, null, null],   // B string - B
        [13, null, null, null],   // G string - A
        [14, null, null, null],   // D string - E
        [16, null, null, null],   // A string - C#
        [12, null, null, null]    // E string (low) - E
    ],
    // Position 4 (octave supérieure)
    [
        [17, null, null, null],   // E string (high) - A
        [17, null, null, null],   // B string - E
        [18, null, null, null],   // G string - C#
        [19, null, null, null],   // D string - A
        [19, null, null, null],   // A string - E
        [17, null, null, null]    // E string (low) - A
    ],
    // Position 5 (formes alternatives)
    [
        [5, 9, 12, null],         // E string (high) - A, C#, E
        [5, 9, 12, null],         // B string - E, G#, B
        [6, 9, 13, null],         // G string - C#, E, A
        [7, 11, 14, null],        // D string - A, C#, E
        [7, 12, 16, null],        // A string - E, A, C#
        [5, 9, 12, null]          // E string (low) - A, C#, E
    ]
];

// Ajout des positions pour les arpèges mineurs (G mineur comme référence)
const minorArpeggioPositions = [
    // Position 1 (G mineur)
    [
        [3, 6, 8],    // E string (high) - G, Bb, D
        [3, 6, 8],    // B string - D, F, G
        [3, 6, 8],    // G string - G, Bb, D
        [3, 6, 8],    // D string - D, F, G
        [3, 6, 8],    // A string - G, Bb, D
        [3, 6, 8]     // E string (low) - G, Bb, D
    ],
    // Position 2
    [
        [8, 10, 13],  // E string (high) - C, D, F
        [8, 10, 13],  // B string - G, A, C
        [6, 8, 11],   // G string - F, G, Bb
        [6, 8, 11],   // D string - G, A, C
        [6, 8, 11],   // A string - D, E, G
        [8, 10, 13]   // E string (low) - C, D, F
    ],
    // Position 3
    [
        [10, 13, 15], // E string (high) - Eb, F, G
        [10, 13, 15], // B string - Bb, C, Eb
        [8, 11, 13],  // G string - C, D, F
        [8, 11, 13],  // D string - G, A, C
        [8, 11, 13],  // A string - D, E, G
        [10, 13, 15]  // E string (low) - Eb, F, G
    ],
    // Position 4 (octave supérieure)
    [
        [15, 18, 20], // E string (high) - G, A, B
        [15, 18, 20], // B string - D, E, G
        [15, 18, 20], // G string - G, A, B
        [15, 18, 20], // D string - D, E, G
        [15, 18, 20], // A string - G, A, B
        [15, 18, 20]  // E string (low) - G, A, B
    ],
    // Position 5 (formes alternatives)
    [
        [3, 8, 10, 15],   // E string (high) - G, C, D, G
        [3, 8, 10, 15],   // B string - D, G, A, D
        [3, 6, 8, 15],    // G string - G, Bb, D, G
        [3, 6, 8, 15],    // D string - D, F, G, D
        [3, 6, 8, 15],    // A string - G, Bb, D, G
        [3, 8, 10, 15]    // E string (low) - G, C, D, G
    ]
];

// Ajout des positions pour les arpèges de septième dominante (G7 comme référence)
const dominant7ArpeggioPositions = [
    // Position 1 (G7)
    [
        [3, 5, 7, 10],    // E string (high) - G, B, D, F
        [3, 5, 7, 10],    // B string - D, F, G, B
        [3, 5, 7, 10],    // G string - G, B, D, F
        [3, 5, 7, 10],    // D string - D, F, G, B
        [3, 5, 7, 10],    // A string - G, B, D, F
        [3, 5, 7, 10]     // E string (low) - G, B, D, F
    ],
    // Position 2
    [
        [8, 10, 12, 15],  // E string (high) - C, D, E, G
        [8, 10, 12, 15],  // B string - G, A, B, D
        [6, 8, 10, 13],   // G string - D, E, G, Bb
        [6, 8, 10, 13],   // D string - G, A, B, D
        [6, 8, 10, 13],   // A string - D, E, G, Bb
        [8, 10, 12, 15]   // E string (low) - C, D, E, G
    ],
    // Position 3
    [
        [10, 12, 14, 17], // E string (high) - Eb, E, F#, A
        [10, 12, 14, 17], // B string - Bb, B, C#, E
        [9, 11, 13, 16],  // G string - E, F#, A, C
        [9, 11, 13, 16],  // D string - B, C#, E, F#
        [9, 11, 13, 16],  // A string - G, A, B, D
        [10, 12, 14, 17]  // E string (low) - Eb, E, F#, A
    ],
    // Position 4
    [
        [13, 15, 17, 20], // E string (high) - F, G, A, C
        [12, 15, 17, 20], // B string - C#, E, F#, A
        [12, 14, 16, 19], // G string - G, A, B, D
        [12, 14, 16, 19], // D string - E, F#, A, C
        [12, 15, 17, 20], // A string - A, C, D, E
        [13, 15, 17, 20]  // E string (low) - F, G, A, C
    ],
    // Position 5 (combinaison)
    [
        [3, 8, 10, 15],   // E string (high) - G, C, D, G
        [3, 8, 10, 15],   // B string - D, G, A, D
        [3, 5, 7, 10],    // G string - G, B, D, F
        [3, 5, 7, 10],    // D string - D, F, G, B
        [3, 5, 7, 10],    // A string - G, B, D, F
        [3, 8, 10, 15]    // E string (low) - G, C, D, G
    ]
];

const dMinorPentatonicPositions = [
    // Position 1
    [
        [10, 13, null, null],  // E string (high) - D, F
        [10, 13, null, null],  // B string - A, C
        [10, 12, null, null],  // G string - F, G
        [10, 12, null, null],  // D string - C, D
        [10, 12, null, null],  // A string - G, A
        [10, 13, null, null]   // E string (low) - D, F
    ],
    // Position 2
    [
        [13, 15, null, null],  // E string (high) - F, G
        [13, 15, null, null],  // B string - C, D
        [12, 14, null, null],  // G string - G, A
        [12, 15, null, null],  // D string - D, F
        [12, 15, null, null],  // A string - A, C
        [13, 15, null, null]   // E string (low) - F, G
    ],
    // Position 3
    [
        [15, 17, null, null],  // E string (high) - G, A
        [15, 17, null, null],  // B string - D, F
        [14, 17, null, null],  // G string - A, C
        [15, 17, null, null],  // D string - F, G
        [15, 17, null, null],  // A string - C, D
        [15, 17, null, null]   // E string (low) - G, A
    ],
    // Position 4
    [
        [17, 20, null, null],  // E string (high) - A, C
        [17, 20, null, null],  // B string - F, G
        [17, 19, null, null],  // G string - C, D
        [17, 19, null, null],  // D string - G, A
        [17, 19, null, null],  // A string - D, F
        [17, 20, null, null]   // E string (low) - A, C
    ],
    // Position 5
    [
        [20, 22, null, null],  // E string (high) - C, D
        [20, 22, null, null],  // B string - G, A
        [19, 22, null, null],  // G string - D, F
        [19, 22, null, null],  // D string - A, C
        [19, 22, null, null],  // A string - F, G
        [20, 22, null, null]   // E string (low) - C, D
    ]
];

// Step 2: Create a key-to-positions map for all scale types
const keyPositionsMap = {
    'minor-pentatonic': {
        'A': minorPentatonicPositions,
        'A#': transposePosition(minorPentatonicPositions, 'A', 'A#'),
        'B': transposePosition(minorPentatonicPositions, 'A', 'B'),
        'C': transposePosition(minorPentatonicPositions, 'A', 'C'),
        'C#': transposePosition(minorPentatonicPositions, 'A', 'C#'),
        'D': dMinorPentatonicPositions,
        'D#': transposePosition(minorPentatonicPositions, 'A', 'D#'),
        'E': transposePosition(minorPentatonicPositions, 'A', 'E'),
        'F': transposePosition(minorPentatonicPositions, 'A', 'F'),
        'F#': transposePosition(minorPentatonicPositions, 'A', 'F#'),
        'G': gMinorPentatonicPositions,
        'G#': transposePosition(minorPentatonicPositions, 'A', 'G#')
    },
    'major-pentatonic': {
        'A': majorPentatonicPositions,
        'A#': transposePosition(majorPentatonicPositions, 'A', 'A#'),
        'B': transposePosition(majorPentatonicPositions, 'A', 'B'),
        'C': transposePosition(majorPentatonicPositions, 'A', 'C'),
        'C#': transposePosition(majorPentatonicPositions, 'A', 'C#'),
        'D': transposePosition(majorPentatonicPositions, 'A', 'D'),
        'D#': transposePosition(majorPentatonicPositions, 'A', 'D#'),
        'E': transposePosition(majorPentatonicPositions, 'A', 'E'),
        'F': transposePosition(majorPentatonicPositions, 'A', 'F'),
        'F#': transposePosition(majorPentatonicPositions, 'A', 'F#'),
        'G': transposePosition(majorPentatonicPositions, 'A', 'G'),
        'G#': transposePosition(majorPentatonicPositions, 'A', 'G#')
    },
    'major-diatonic': {
        'C': majorDiatonicPositions,
        'C#': transposePosition(majorDiatonicPositions, 'C', 'C#'),
        'D': transposePosition(majorDiatonicPositions, 'C', 'D'),
        'D#': transposePosition(majorDiatonicPositions, 'C', 'D#'),
        'E': transposePosition(majorDiatonicPositions, 'C', 'E'),
        'F': transposePosition(majorDiatonicPositions, 'C', 'F'),
        'F#': transposePosition(majorDiatonicPositions, 'C', 'F#'),
        'G': transposePosition(majorDiatonicPositions, 'C', 'G'),
        'G#': transposePosition(majorDiatonicPositions, 'C', 'G#'),
        'A': transposePosition(majorDiatonicPositions, 'C', 'A'),
        'A#': transposePosition(majorDiatonicPositions, 'C', 'A#'),
        'B': transposePosition(majorDiatonicPositions, 'C', 'B')
    },
    'minor-diatonic': {
        'G': minorDiatonicPositions,
        'G#': transposePosition(minorDiatonicPositions, 'G', 'G#'),
        'A': transposePosition(minorDiatonicPositions, 'G', 'A'),
        'A#': transposePosition(minorDiatonicPositions, 'G', 'A#'),
        'B': transposePosition(minorDiatonicPositions, 'G', 'B'),
        'C': transposePosition(minorDiatonicPositions, 'G', 'C'),
        'C#': transposePosition(minorDiatonicPositions, 'G', 'C#'),
        'D': transposePosition(minorDiatonicPositions, 'G', 'D'),
        'D#': transposePosition(minorDiatonicPositions, 'G', 'D#'),
        'E': transposePosition(minorDiatonicPositions, 'G', 'E'),
        'F': transposePosition(minorDiatonicPositions, 'G', 'F'),
        'F#': transposePosition(minorDiatonicPositions, 'G', 'F#')
    },
    'major-arpeggio': {
        'A': majorArpeggioPositions,
        'A#': transposePosition(majorArpeggioPositions, 'A', 'A#'),
        'B': transposePosition(majorArpeggioPositions, 'A', 'B'),
        'C': transposePosition(majorArpeggioPositions, 'A', 'C'),
        'C#': transposePosition(majorArpeggioPositions, 'A', 'C#'),
        'D': transposePosition(majorArpeggioPositions, 'A', 'D'),
        'D#': transposePosition(majorArpeggioPositions, 'A', 'D#'),
        'E': transposePosition(majorArpeggioPositions, 'A', 'E'),
        'F': transposePosition(majorArpeggioPositions, 'A', 'F'),
        'F#': transposePosition(majorArpeggioPositions, 'A', 'F#'),
        'G': transposePosition(majorArpeggioPositions, 'A', 'G'),
        'G#': transposePosition(majorArpeggioPositions, 'A', 'G#')
    },
    'minor-arpeggio': {
        'G': minorArpeggioPositions,
        'G#': transposePosition(minorArpeggioPositions, 'G', 'G#'),
        'A': transposePosition(minorArpeggioPositions, 'G', 'A'),
        'A#': transposePosition(minorArpeggioPositions, 'G', 'A#'),
        'B': transposePosition(minorArpeggioPositions, 'G', 'B'),
        'C': transposePosition(minorArpeggioPositions, 'G', 'C'),
        'C#': transposePosition(minorArpeggioPositions, 'G', 'C#'),
        'D': transposePosition(minorArpeggioPositions, 'G', 'D'),
        'D#': transposePosition(minorArpeggioPositions, 'G', 'D#'),
        'E': transposePosition(minorArpeggioPositions, 'G', 'E'),
        'F': transposePosition(minorArpeggioPositions, 'G', 'F'),
        'F#': transposePosition(minorArpeggioPositions, 'G', 'F#')
    },
    'dominant7-arpeggio': {
        'G': dominant7ArpeggioPositions,
        'G#': transposePosition(dominant7ArpeggioPositions, 'G', 'G#'),
        'A': transposePosition(dominant7ArpeggioPositions, 'G', 'A'),
        'A#': transposePosition(dominant7ArpeggioPositions, 'G', 'A#'),
        'B': transposePosition(dominant7ArpeggioPositions, 'G', 'B'),
        'C': transposePosition(dominant7ArpeggioPositions, 'G', 'C'),
        'C#': transposePosition(dominant7ArpeggioPositions, 'G', 'C#'),
        'D': transposePosition(dominant7ArpeggioPositions, 'G', 'D'),
        'D#': transposePosition(dominant7ArpeggioPositions, 'G', 'D#'),
        'E': transposePosition(dominant7ArpeggioPositions, 'G', 'E'),
        'F': transposePosition(dominant7ArpeggioPositions, 'G', 'F'),
        'F#': transposePosition(dominant7ArpeggioPositions, 'G', 'F#')
    }
};

// Modifier la fonction getScale pour inclure les arpèges
function getScale(root, scaleType) {
    const rootIndex = notes.indexOf(root);
    
    // Définir les intervalles selon le type de gamme ou d'arpège
    let intervals;
    
    switch(scaleType) {
        case 'minor-pentatonic':
            intervals = [0, 3, 5, 7, 10]; // Pentatonique mineure
            break;
        case 'major-pentatonic':
            intervals = [0, 2, 4, 7, 9]; // Pentatonique majeure
            break;
        case 'major-diatonic':
            intervals = [0, 2, 4, 5, 7, 9, 11]; // Diatonique majeure
            break;
        case 'minor-diatonic':
            intervals = [0, 2, 3, 5, 7, 8, 10]; // Diatonique mineure (naturelle)
            break;
        case 'major-arpeggio':
            intervals = [0, 4, 7]; // Arpège majeur (1, 3, 5)
            break;
        case 'minor-arpeggio':
            intervals = [0, 3, 7]; // Arpège mineur (1, b3, 5)
            break;
        case 'dominant7-arpeggio':
            intervals = [0, 4, 7, 10]; // Arpège de septième dominante (1, 3, 5, b7)
            break;
        default:
            intervals = [0, 3, 5, 7, 10]; // Par défaut: pentatonique mineure
    }
    
    return intervals.map(interval => {
        const noteIndex = (rootIndex + interval) % 12;
        return notes[noteIndex];
    });
}

// Transpose a position based on the key
function transposePosition(position, fromKey, toKey) {
    const noteOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const fromKeyIndex = noteOrder.indexOf(fromKey);
    const toKeyIndex = noteOrder.indexOf(toKey);
    
    let offset = toKeyIndex - fromKeyIndex;
    
    // Ensure we get the shortest path around the circle of fifths
    if (offset > 6) offset -= 12;
    if (offset < -6) offset += 12;

    // Create a deep copy to avoid modifying the original
    const transposedPosition = JSON.parse(JSON.stringify(position));

    // Apply the offset to each fret number
    for (let posIdx = 0; posIdx < transposedPosition.length; posIdx++) {
        const currentPos = transposedPosition[posIdx];
        for (let s = 0; s < currentPos.length; s++) {
            for (let f = 0; f < currentPos[s].length; f++) {
                if (currentPos[s][f] !== null) {
                    currentPos[s][f] = currentPos[s][f] + offset;
                    
                    // Keep the fret numbers in a reasonable range
                    while (currentPos[s][f] < 0) {
                        currentPos[s][f] += 12;
                    }
                    while (currentPos[s][f] > 24) {
                        currentPos[s][f] -= 12;
                    }
                }
            }
        }
    }

    return transposedPosition;
}

// Fonction pour obtenir les positions selon le type de gamme ou d'arpège
function getPositionsForScaleType(scaleType) {
    switch(scaleType) {
        case 'minor-pentatonic':
            return minorPentatonicPositions;
        case 'major-pentatonic':
            return majorPentatonicPositions;
        case 'major-diatonic':
            return majorDiatonicPositions;
        case 'minor-diatonic':
            return minorDiatonicPositions;
        case 'major-arpeggio':
            return majorArpeggioPositions;
        case 'minor-arpeggio':
            return minorArpeggioPositions;
        case 'dominant7-arpeggio':
            return dominant7ArpeggioPositions;
        default:
            return minorPentatonicPositions;
    }
}

// Step 4: Create a function to get positions for a given key and scale type
function getPositionsForKey(key, scaleType) {
    // Return predefined positions if available
    if (keyPositionsMap[scaleType] && keyPositionsMap[scaleType][key]) {
        return keyPositionsMap[scaleType][key];
    }

    // Fallback to dynamic transposition
    let refKey;
    if (scaleType === 'major-pentatonic') refKey = 'A';
    else if (scaleType === 'minor-pentatonic') refKey = 'A';
    else if (scaleType === 'major-diatonic') refKey = 'C';
    else if (scaleType === 'minor-diatonic') refKey = 'G';
    else if (scaleType === 'major-arpeggio') refKey = 'A';
    else if (scaleType === 'minor-arpeggio') refKey = 'G';
    else if (scaleType === 'dominant7-arpeggio') refKey = 'G';
    else refKey = 'A';

    const basePositions = getPositionsForScaleType(scaleType);
    return basePositions.map(position => transposePosition(position, refKey, key));
}

// Step 6: Update renderPosition to accept the position and startFret directly
function renderPosition(positionIndex, key, scaleType, position, startFret) {
    const scaleNotes = getScale(key, scaleType);
    const rootNote = key;
    
    const positionDiv = document.createElement('div');
    positionDiv.className = 'position';
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'position-title';
    titleDiv.textContent = `Position ${positionIndex + 1}`;
    positionDiv.appendChild(titleDiv);
    
    const fretboardDiv = document.createElement('div');
    fretboardDiv.className = 'fretboard';
    
    // Add the fret headers
    fretboardDiv.appendChild(document.createElement('div')); // Empty cell for alignment
    for (let i = 0; i < 4; i++) {
        const fretHeaderCell = document.createElement('div');
        fretHeaderCell.textContent = (startFret + i);
        fretHeaderCell.className = 'fret-header';
        fretboardDiv.appendChild(fretHeaderCell);
    }
    
    // Create the string names and fretboard grid
    for (let string = 0; string < 6; string++) {
        // String name
        const stringNameDiv = document.createElement('div');
        stringNameDiv.className = 'string-name';
        stringNameDiv.textContent = strings[string];
        fretboardDiv.appendChild(stringNameDiv);
        
        // Create the frets
        for (let fretOffset = 0; fretOffset < 4; fretOffset++) {
            const actualFret = startFret + fretOffset;
            const fretDiv = document.createElement('div');
            fretDiv.className = 'fret';
            
            const note = getNoteAtFret(strings[string], actualFret);
            
            // Check if this position contains a note at this fret
            let isPositionNote = false;
            for (let f = 0; f < position[string].length; f++) {
                if (position[string][f] === actualFret) {
                    isPositionNote = true;
                    break;
                }
            }
            
            // Create the note div
            const noteDiv = document.createElement('div');
            noteDiv.className = 'note';
            noteDiv.textContent = note;
            
            // Check if this note is in the scale
            if (scaleNotes.includes(note)) {
                // Distinguish between root and other scale notes
                if (note === rootNote) {
                    noteDiv.classList.add('root');
                } else {
                    noteDiv.classList.add('scale');
                }
            } else if (isPositionNote) {
                // For notes in the position but not in the scale (shouldn't happen for pentatonic)
                noteDiv.style.backgroundColor = "#aaaaaa";
            }
            
            // Highlight notes that are part of this position
            if (!isPositionNote) {
                noteDiv.style.opacity = "0.4";
            }
            
            fretDiv.appendChild(noteDiv);
            fretboardDiv.appendChild(fretDiv);
        }
    }
    
    positionDiv.appendChild(fretboardDiv);
    return positionDiv;
}

// Step 5: Update renderAllPositions to use our new function
function renderAllPositions() {
    console.log("renderAllPositions called");
    const key = document.getElementById('key').value;
    const scaleType = document.getElementById('scale-type').value;
    
    const positionsContainer = document.getElementById('positions');
    positionsContainer.innerHTML = '';
    
    // Get the positions for the selected key and scale type
    const positions = getPositionsForKey(key, scaleType);
    console.log(`Positions for ${key} ${scaleType}:`, positions);
    // Add a safer logging method to handle null values
    console.log(`Positions (detailed) for ${key} ${scaleType}:`, positions.map(p => 
        p.map(s => (Array.isArray(s) ? s.join(',') : 'Invalid or null'))
    ));
    
    for (let i = 0; i < positions.length; i++) {
        const position = positions[i];
        
        // Find the lowest fret in this position for display purposes
        let startFret = 999;
        for (let s = 0; s < position.length; s++) {
            for (let f = 0; f < position[s].length; f++) {
                if (position[s][f] !== null && position[s][f] < startFret) {
                    startFret = position[s][f];
                }
            }
        }
        
        // Create and add the position div
        const positionDiv = renderPosition(i, key, scaleType, position, startFret);
        positionsContainer.appendChild(positionDiv);
    }
}

// Mettre à jour l'interface HTML pour inclure les arpèges et options en anglais
function updateHtmlForArpeggios() {
    // Modifier le sélecteur de type de gamme
    const scaleTypeSelect = document.getElementById('scale-type');
    
    // Vider le sélecteur existant
    scaleTypeSelect.innerHTML = '';
    
    // Ajouter les options en anglais
    const options = [
        { value: 'minor-pentatonic', text: 'Minor Pentatonic' },
        { value: 'major-pentatonic', text: 'Major Pentatonic' },
        { value: 'minor-diatonic', text: 'Minor Scale' },
        { value: 'major-diatonic', text: 'Major Scale' },
        { value: 'major-arpeggio', text: 'Major Arpeggio' },
        { value: 'minor-arpeggio', text: 'Minor Arpeggio' },
        { value: 'dominant7-arpeggio', text: 'Dominant 7th Arpeggio' }
    ];
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        scaleTypeSelect.appendChild(optionElement);
    });
    
    // Mettre à jour les autres textes en anglais
    document.querySelector('h1').textContent = 'Guitar Scale Viewer';
    
    const infoBox = document.querySelector('.info-box');
    infoBox.querySelector('h3').textContent = 'Scale Guide';
    infoBox.querySelector('p').textContent = 'Choose a key and scale type to visualize positions on the guitar fretboard. Red dots are root notes, blue dots are other notes of the scale or arpeggio.';
    
    document.querySelector('label[for="key"]').textContent = 'Key';
    document.querySelector('label[for="scale-type"]').textContent = 'Scale Type';
    
    // Mettre à jour la légende
    const legendItems = document.querySelectorAll('.legend-item span');
    legendItems[0].textContent = 'Root';
    legendItems[1].textContent = 'Scale Note';
    legendItems[2].textContent = 'Other Notes';
}

// Obtenir la note à un fret spécifique sur une corde donnée
function getNoteAtFret(stringName, fret) {
    const openNoteIndex = notes.indexOf(stringName);
    const noteIndex = (openNoteIndex + fret) % 12;
    return notes[noteIndex];
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Mettre à jour l'interface pour inclure les arpèges et textes en anglais
    updateHtmlForArpeggios();
    
    // Définir G comme tonalité par défaut
    document.getElementById('key').value = 'G';
    
    // Événements pour les changements de contrôles
    document.getElementById('key').addEventListener('change', renderAllPositions);
    document.getElementById('scale-type').addEventListener('change', renderAllPositions);
    
    // Rendu initial
    renderAllPositions();
});