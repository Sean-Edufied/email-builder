import { z } from 'zod';
import { type BaseZodDictionary, type BlockConfiguration, type DocumentBlocksDictionary } from '../utils';
/**
 *
 * @param blocks Main DocumentBlocksDictionary
 * @returns zod schema that can parse arbitary objects into a single BlockConfiguration
 */
export default function buildBlockConfigurationSchema<T extends BaseZodDictionary>(blocks: DocumentBlocksDictionary<T>): z.ZodEffects<z.ZodDiscriminatedUnion<"type", any>, BlockConfiguration<T>, any>;
//# sourceMappingURL=buildBlockConfigurationSchema.d.ts.map